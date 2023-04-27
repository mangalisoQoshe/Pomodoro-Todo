import styles from "./Pomodoro.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Settings({setSettings,input,setInput,isSettingsOpen}) {

    const handleXBtn=()=>{
        setSettings(!isSettingsOpen)
    }
  return (
    <div className={styles.settings}>
      <h1 className={styles.heading}>Settings</h1>{" "}
      <button 
      className={styles["exit-btn"]}
      onClick={handleXBtn}
      >
        <XMarkIcon
          className={styles["svg-icon"]}
          strokeWidth={2}
          height={32}
          width={32}
        />
        
      </button>
      <form className={styles.form}>
        <label htmlFor="pomodoro">Pomodoro</label>
        <input type="number" id="pomodoro" value={input.pomodoro} min={0}/>

        <label htmlFor="shortBreak" >Short Break</label>
        <input type="number" id="shortBreak" value={input.shortBreak} min={0}/>

        <label htmlFor="longBreak">Long break</label>
        <input type="number" id="longBreak" value={input.longBreak} min={0}/>

        <button 
        className={styles["form-btn"]}
        
        >Apply</button>
      </form>
    </div>
  );
}
