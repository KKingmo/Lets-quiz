import { useRecoilValue } from "recoil";
import { quizResultState } from "../../commons/store";
import { VictoryPie } from "victory";
import * as S from "./styles";
import { useEffect, useState } from "react";
import Button01 from "../../commons/buttons/01";

const defaultGraphicData = [
  { x: 1, y: 0, label: `정답 Loading...` },
  { x: 2, y: 10, label: `오답 Loading...` },
];

export default function QuizResult() {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);
  const dataQuizResult = useRecoilValue(quizResultState);
  const [quizResult, setQuizResult] = useState<{ [key: string]: any }>({});
  const resultKey = () => {
    return Object.keys(dataQuizResult.at(-1))[0];
  };

  useEffect(() => {
    const _data = dataQuizResult.at(-1)[resultKey()];
    const correctCount = _data.scoreSheet?.filter((el: boolean) => el).length;
    const wrongCount = _data.scoreSheet?.length - correctCount;
    setQuizResult({
      dataResult: _data,
      correctCount,
      wrongCount,
    });
    setGraphicData([
      {
        x: 1,
        y: correctCount,
        label: `정답 ${correctCount}개`,
      },
      {
        x: 2,
        y: wrongCount,
        label: `오답 ${wrongCount}개`,
      },
    ]);
  }, []);

  return (
    <>
      <S.Title className="quiz-title">퀴즈 결과</S.Title>
      <S.QuizType className="quiz-type">
        <span>{quizResult.dataResult?.category}</span>
        <span>{quizResult.dataResult?.difficulty}</span>
        <span>총 {quizResult.correctCount + quizResult.wrongCount}문항</span>
      </S.QuizType>
      <S.TimeTaken className="quiz-timer">
        소요시간 : {Math.floor(quizResult.dataResult?.timeTaken / 60)}분 {quizResult.dataResult?.timeTaken % 60}초
      </S.TimeTaken>
      <S.ChartWrapper>
        <VictoryPie animate={{ duration: 500 }} style={{ labels: { fill: "#fff" } }} colorScale={["#00c896", "#d4d4d444"]} data={graphicData} />
      </S.ChartWrapper>
      <S.ButtonWrapper>
        <Button01 name="다시풀기" onClick={() => window.history.back()} />
      </S.ButtonWrapper>
    </>
  );
}
