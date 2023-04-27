

//styles
import styles from "./Pomodoro.module.css";

export default function PomoButton({isRunning,setIsRunning}) {

  const handleButtonClick=()=>{
    setIsRunning(!isRunning)
  }
  return (
    <button 
    className={styles["start-btn"]}
    onClick={handleButtonClick  }
    
    >{isRunning ?'Pause' : 'Start'}</button>
  )
}
