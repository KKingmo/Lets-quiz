import { useEffect, useState } from "react";
import { useInterval } from "../../commons/hooks/useInterval";

export default function QuizTimer() {
  const [timeCount, setTimeCount] = useState<number>(0);

  const setTimer = () => {
    setTimeCount((prev) => prev + 1);
  };

  const [timerStart, timerPause] = useInterval(setTimer);

  useEffect(() => {
    timerStart();

    return () => {
      timerPause();
    };
  }, []);

  return <div>{timeCount}초</div>;
}
