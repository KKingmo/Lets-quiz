import { useRecoilValue } from "recoil";
import { quizResultState } from "../../commons/store";
import { VictoryPie } from "victory";
import * as S from "./styles";
import { useEffect, useState } from "react";
import Button01 from "../../commons/buttons/01";

export default function QuizResult() {
  const dataQuizResult = useRecoilValue(quizResultState);
  const [quizResult, setQuizResult] = useState<{ [key: string]: any }>({});
  const resultKey = () => {
    return Object.keys(dataQuizResult.at(-1))[0];
  };

  useEffect(() => {
    const _data = dataQuizResult.at(-1)[resultKey()];
    setQuizResult({
      dataResult: _data,
      correctCount: _data.scoreSheet?.filter((el: boolean) => el).length,
      wrongCount: _data.scoreSheet?.filter((el: boolean) => !el).length,
    });
  }, []);

  return (
    <>
      <S.Title>퀴즈 결과</S.Title>
      <S.QuizType>
        <span>{quizResult.dataResult?.category}</span>
        <span>{quizResult.dataResult?.difficulty}</span>
        <span>총 {quizResult.correctCount + quizResult.wrongCount}문항</span>
      </S.QuizType>
      <S.TimeTaken>
        소요시간 : {Math.floor(quizResult.dataResult?.timeTaken / 60)}분{" "}
        {quizResult.dataResult?.timeTaken % 60}초
      </S.TimeTaken>
      <S.ChartWrapper>
        <VictoryPie
          style={{ labels: { fill: "#fff" } }}
          colorScale={["#00c896", "#d4d4d444"]}
          data={[
            {
              x: 1,
              y: quizResult.correctCount,
              label: `정답 ${quizResult.correctCount}개`,
            },
            {
              x: 2,
              y: quizResult.wrongCount,
              label: `오답 ${quizResult.wrongCount}개`,
            },
          ]}
        />
      </S.ChartWrapper>
      <S.ButtonWrapper>
        <Button01 name="다시풀기" onClick={() => window.history.back()} />
      </S.ButtonWrapper>
    </>
  );
}
