import PropTypes from "prop-types";
import styles from "./Pomodoro.module.css";
import { useEffect } from "react";

export default function Counter({ count, setCount, isRunning, setIsRunning }) {
  useEffect(() => {
    if (isRunning && count > 0) {
      const intervalId = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (isRunning && count === 0) {
      setIsRunning(false);
      alert("Countdown complete!");
    }
  }, [isRunning, count]);

  const minutes = Math.floor(count/60);
  const seconds = count % 60;

  return (
    <div className={styles.counter}>
      <span className={styles.count}>   {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
}

Counter.propTypes = {
  className: PropTypes.string,
  count: PropTypes.node.isRequired,
  setCount: PropTypes.node.isRequired,
  isRunning: PropTypes.node.isRequired,
  setIsRunning: PropTypes.node.isRequired,
};
