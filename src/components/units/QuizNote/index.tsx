import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { quizResultState } from "../../commons/store";
import { v4 as uuidv4 } from "uuid";
import { elapsedTime } from "../../commons/libraries/utils";
import * as S from "./styles";
import DOMPurify from "dompurify";

export default function QuizNote() {
  const dataQuizResult = useRecoilValue(quizResultState);
  const [resultKeys, setResultKeys] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<Array<string | number>>([]);

  const handleListClick = (idx: number, key: string) => () => {
    setShowResult([idx, key]);
  };

  useEffect(() => {
    const _resultKeys = [];
    for (let i = dataQuizResult.length - 1; i >= 0; i--) {
      _resultKeys.push(Object.keys(dataQuizResult[i])[0]);
    }
    setResultKeys(_resultKeys);
  }, []);
  console.log(dataQuizResult.scoreSheet?.filter((el: boolean) => el).length);
  return (
    <S.Wrapper>
      <S.Aside>
        <ul className="note-list">
          {resultKeys.map((el, idx) => (
            <li key={uuidv4()} onClick={handleListClick(resultKeys.length - idx - 1, el)} className={showResult[1] === el ? "isActive" : ""}>
              <span>{elapsedTime(+el)}</span>
            </li>
          ))}
        </ul>
      </S.Aside>
      {(showResult.length !== 0 && (
        <S.Section>
          <div>
            <S.QuizType>Quiz</S.QuizType>
            <S.QuizType>{dataQuizResult[showResult[0]]?.[showResult[1]]?.category}</S.QuizType>
            <S.QuizType>{dataQuizResult[showResult[0]]?.[showResult[1]]?.difficulty}</S.QuizType>
            <S.QuizType className="correctTag">맞힌문제</S.QuizType>
            <S.QuizType className="wrongTag">틀린문제</S.QuizType>
          </div>

          <S.GradeText>
            총 <span>{dataQuizResult[showResult[0]]?.[showResult[1]]?.scoreSheet.length}문제</span> 중에{" "}
            <span>{dataQuizResult[showResult[0]]?.[showResult[1]]?.scoreSheet.filter((el: boolean) => el).length}문제</span> 맞히셨어요!
          </S.GradeText>

          {dataQuizResult[showResult[0]]?.[showResult[1]]?.dataQuiz.map((e: any, idx: number) => (
            <S.ResultWrapper key={uuidv4()}>
              <S.Question>
                <b>{idx + 1}. </b>
                {typeof window !== "undefined" ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(e.question),
                    }}
                  />
                ) : (
                  <span></span>
                )}
              </S.Question>

              <S.AnswersWrapper>
                {e.answers.map((g: string, idx2: number) => (
                  <S.Answers
                    key={uuidv4()}
                    className={dataQuizResult[showResult[0]][showResult[1]].myAnswer[idx] === g ? "isActive" : ""}
                    isCorrect={dataQuizResult[showResult[0]][showResult[1]].myAnswer[idx] === e.correct_answer}
                  >
                    <b>{idx2 + 1}</b>
                    {typeof window !== "undefined" ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(g),
                        }}
                      />
                    ) : (
                      <span />
                    )}
                  </S.Answers>
                ))}
              </S.AnswersWrapper>

              <S.CorrectAnswer>
                정답 :{" "}
                {typeof window !== "undefined" ? (
                  <b
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(e.correct_answer),
                    }}
                  />
                ) : (
                  <b />
                )}
              </S.CorrectAnswer>
            </S.ResultWrapper>
          ))}
        </S.Section>
      )) || <S.GuideText>메뉴를 누르시면 해당하는 오답노트를 볼 수 있어요.</S.GuideText>}
    </S.Wrapper>
  );
}
