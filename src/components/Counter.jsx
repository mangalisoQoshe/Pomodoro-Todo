import PropTypes from "prop-types";
import styles from "./Pomodoro.module.css";
import { useEffect,useState } from "react";



export default function Counter({ count, setCount, isRunning, setIsRunning }) {
  const [audio] = useState(new Audio("public/assets/rooster.wav"));

  useEffect(() => {
    if (isRunning && count > 0) {
      const intervalId = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (isRunning && count === 0) {
      setIsRunning(false);
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 4000); // Stop audio after 4 seconds
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
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
  setIsRunning: PropTypes.func.isRequired,
};
