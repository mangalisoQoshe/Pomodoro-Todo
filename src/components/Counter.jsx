import PropTypes from "prop-types";
import styles from "./Pomodoro.module.css";
import { useEffect, useRef, useState } from "react";

export default function Counter({
  isRunning,
  setIsRunning,
  input,
  setInput,
  updateTime,
}) {
  const [audio] = useState(new Audio("/rooster.wav"));
  const intervalRef = useRef(4);

  useEffect(() => {
    if (isRunning && input.count > 0) {
      const intervalId = setInterval(() => {
        setInput((prevState) => ({ ...prevState, count: input.count - 1 }));
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (isRunning && input.count === 0) {
      setIsRunning(false);
      audio.play();
      const timeout1 = setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 4000); // Stop audio after 4 seconds

      setTimeout(() => {
        switch (input.activeBtn) {
          case "pomodoro":
            intervalRef.current = intervalRef.current - 1;
            console.log(intervalRef.current);
            updateTime(intervalRef.current === 0 ? "longBreak" : "shortBreak");
            break;

          case "shortBreak":
            updateTime("pomodoro");
            break;

          case "longBreak":
            intervalRef.current = 4; // I'll finish the interval thing later, I think the use should be able to change number of intervals
            updateTime("pomodoro");
            break;
        }
      }, 2000);

      return () => {
        clearTimeout(timeout1);
      };
    }
  }, [isRunning, input]);

  const minutes = Math.floor(input.count / 60);
  const seconds = input.count % 60;

  useEffect(() => {
    document.title =
      minutes +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds) +
      (input.activeBtn === "pomodoro"
        ? " -Time to focus!"
        : " -Time for a break!");
  }, [seconds, minutes, input.activeBtn]);

  return (
    <div className={styles.counter}>
      <span className={styles.count}>
        {" "}
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
}

Counter.propTypes = {
  className: PropTypes.string,
  isRunning: PropTypes.bool.isRequired,
  setIsRunning: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
  setInput: PropTypes.func.isRequired,
  updateTime: PropTypes.func.isRequired,
};
