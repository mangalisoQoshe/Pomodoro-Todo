

//styles
import styles from "./Pomodoro.module.css";

export default function PomoButton() {

  const handleButtonClick=()=>{
    console.log("1")
  }
  return (
    <button 
    className={styles["start-btn"]}
    onClick={handleButtonClick  }
    
    >Start</button>
  )
}
