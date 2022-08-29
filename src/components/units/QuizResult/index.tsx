import { useRecoilState } from "recoil";
import { quizResultState } from "../../commons/store";

export default function QuizResult() {
  const [quizResult, setQuizResult] = useRecoilState(quizResultState);
  console.log(quizResult);
  return <div>와드</div>;
}
