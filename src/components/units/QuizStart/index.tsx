import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
import { useState } from "react";
import QuizHeader from "../QuizHeader";
import QuizTimer from "../QuizTimer";
import Button01 from "../../commons/buttons/01";
import { quizResultState } from "../../commons/store";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

interface Quiz {
  question: string;
  correct_answer: string;
  answers: string[];
}

interface QuizPageProps {
  dataQuiz: Quiz[];
  category: number;
  difficulty: string;
}

export default function QuizStart(props: QuizPageProps) {
  const { dataQuiz, category, difficulty } = props;
  const [stage, setStage] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [myAnswer, setMyAnswer] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useRecoilState(quizResultState);
  const router = useRouter();

  const handleAnswerClick = (answer: string, correctAnswer: string) => () => {
    if (isClicked) return;
    setIsClicked((prev) => true);
    setMyAnswer((prev) => [...prev, answer]);
    if (answer !== correctAnswer) return setIsCorrect(false);
    return setIsCorrect(true);
  };

  const handleNextClick = async () => {
    setIsClicked((prev) => false);
    if (stage === dataQuiz.length) {
      const _quizResult = {
        category,
        difficulty,
        myAnswer,
        dataQuiz,
      };
      await setQuizResult([...quizResult, { [Date.now()]: _quizResult }]);
      return router.push("/result");
    }
    setStage((prev) => prev + 1);
    setIsCorrect(null);
  };

  return (
    <div>
      <QuizHeader category={category} difficulty={difficulty} stage={stage} />
      <QuizTimer />
      <div>
        {stage} / {dataQuiz.length}
      </div>
      <div>
        {isCorrect !== null && (isCorrect ? "정답입니다" : "틀렸습니다")}
      </div>
      {typeof window !== "undefined" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(dataQuiz[stage - 1].question),
          }}
        />
      ) : (
        <div />
      )}

      <ul>
        {dataQuiz[stage - 1].answers.map((e, idx) => (
          <li
            key={uuidv4()}
            onClick={handleAnswerClick(e, dataQuiz[stage - 1].correct_answer)}
          >
            <span>{idx + 1}. </span>
            {typeof window !== "undefined" ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(e),
                }}
              />
            ) : (
              <span />
            )}
          </li>
        ))}
      </ul>

      <Button01
        onClick={handleNextClick}
        disabled={isCorrect === null}
        name="다음"
      />
    </div>
  );
}
