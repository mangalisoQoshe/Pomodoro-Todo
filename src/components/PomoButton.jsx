import { useState } from "react";
import styles from "./Pomodoro.module.css";
import PropTypes from "prop-types";


export default function PomoButton({isRunning,setIsRunning,count}) {
  const [audio] = useState(new Audio("/src/assets/click-button-140881.mp3"));
  const handleButtonClick=()=>{
    setIsRunning(!isRunning)
    audio.play()
    setTimeout(()=>{
      audio.pause();
        audio.currentTime = 0;
    },100)
  }
  return (
    <button 
    className={styles["start-btn"]}
    onClick={handleButtonClick  }
    disabled={count === 0}
    
    >{isRunning ?'Pause' : 'Start'}</button>
  )
}


PomoButton.propTypes = {
  className: PropTypes.string,
  isRunning: PropTypes.bool.isRequired,
  setIsRunning: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
