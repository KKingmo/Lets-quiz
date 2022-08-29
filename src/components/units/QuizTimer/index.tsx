import { MutableRefObject, useEffect, useState } from "react";
import { useInterval } from "../../commons/hooks/useInterval";

export default function QuizTimer({
  timeRef,
}: {
  timeRef: MutableRefObject<number>;
}) {
  const [timeCount, setTimeCount] = useState<number>(0);

  const setTimer = () => {
    setTimeCount((timeRef.current += 1));
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
