import PropTypes from "prop-types";
import styles from "./Pomodoro.module.css";
import { useEffect,useState } from "react";



export default function Counter({  isRunning, setIsRunning,input,setInput,updateTime }) {
  const [audio] = useState(new Audio("/rooster.wav"));


  useEffect(() => {
    if (isRunning &&  input.count > 0) {
      const intervalId = setInterval(() => {
        setInput((prevState)=>({...prevState,count: input.count -1}))
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (isRunning &&  input.count === 0) {
      setIsRunning(false);
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 4000); // Stop audio after 4 seconds
    }
  }, [isRunning,input]);

  const minutes = Math.floor( input.count/60);
  const seconds =  input.count % 60;

  return (
    <div className={styles.counter}>
      <span className={styles.count}>   {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
}

Counter.propTypes = {
  className: PropTypes.string,
  isRunning: PropTypes.bool.isRequired,
  setIsRunning: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
  setInput: PropTypes.func.isRequired,
};
