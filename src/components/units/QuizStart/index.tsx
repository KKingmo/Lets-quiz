import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import { quizResultState } from "../../commons/store";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";
import QuizHeader from "../QuizHeader";
import QuizTimer from "../QuizTimer";
import Button01 from "../../commons/buttons/01";
import * as S from "./styles";

interface Quiz {
  question: string;
  correct_answer: string;
  answers: string[];
}

interface QuizPageProps {
  dataQuiz: Quiz[];
  category: string;
  difficulty: string;
}

export default function QuizStart(props: QuizPageProps) {
  const { dataQuiz, category, difficulty } = props;
  const [stage, setStage] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [myAnswer, setMyAnswer] = useState<string[]>([]);
  const [isMount, setIsMount] = useState<boolean>(false);
  const [quizResult, setQuizResult] = useRecoilState(quizResultState);
  const timeRef = useRef<number>(0);
  const router = useRouter();

  const handleAnswerClick = (answer: string, correctAnswer: string) => () => {
    if (isClicked) return;
    setIsClicked((prev) => true);
    setMyAnswer((prev) => [...prev, answer]);
    if (answer !== correctAnswer) return setIsCorrect(false);
    return setIsCorrect(true);
  };

  const handleNextClick = () => {
    setIsClicked((prev) => false);
    if (stage === dataQuiz.length) {
      const _quizResult = {
        category,
        difficulty,
        myAnswer,
        dataQuiz,
        timeTaken: timeRef.current,
        scoreSheet: dataQuiz.map((el, idx) => {
          if (el.correct_answer === myAnswer[idx]) return true;
          return false;
        }),
      };
      setQuizResult([...quizResult, { [Date.now()]: _quizResult }]);
      return router.push("/result");
    }
    setStage((prev) => prev + 1);
    setIsCorrect(null);
  };

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    setIsMount(true);
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  return (
    <S.Wrapper>
      <QuizHeader category={category} difficulty={difficulty} stage={stage} />
      <QuizTimer timeRef={timeRef} />
      <S.StateBar state={stage / dataQuiz.length} />
      <S.StageMessage isCorrect={isCorrect}>
        <span>
          {(isCorrect === null && "보기를 선택하세요.") ||
            (isCorrect ? "정답이에요!" : "틀렸어요.")}
        </span>
        <span>
          {stage} / {dataQuiz.length}
        </span>
      </S.StageMessage>
      {isMount &&
        (typeof window !== "undefined" ? (
          <S.Question
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(dataQuiz[stage - 1]?.question),
            }}
          />
        ) : (
          <S.Question></S.Question>
        ))}

      <S.AnswersWrapper>
        {dataQuiz[stage - 1].answers.map((e, idx) => (
          <S.Answer
            key={uuidv4()}
            onClick={handleAnswerClick(e, dataQuiz[stage - 1]?.correct_answer)}
          >
            <span>{idx + 1}. </span>
            {isMount &&
              (typeof window !== "undefined" ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(e),
                  }}
                />
              ) : (
                <span></span>
              ))}
          </S.Answer>
        ))}
      </S.AnswersWrapper>
      <S.ButtonWrapper>
        <Button01
          onClick={handleNextClick}
          disabled={isCorrect === null}
          name="다음 >"
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
