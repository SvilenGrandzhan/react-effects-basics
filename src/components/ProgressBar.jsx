import { useEffect, useState } from "react";
const TIMER = 3000;

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((previousTime) => previousTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      value={remainingTime}
      max={timer}
    />
  );
}
