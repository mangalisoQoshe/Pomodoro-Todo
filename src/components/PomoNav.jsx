//styles
import { useState } from "react";
import styles from "./Pomodoro.module.css";

//library imports
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

//component import

export default function PomoNav({setCount,input,setSettings,isSettingsOpen}) {
  const [activeButton,setActiveButton] = useState("PB");

  const handleButtonClick = (btnId) => {
    setActiveButton(btnId);
    if(btnId === "PB"){
      setCount((input.pomodoro)*60)
    }

    else if(btnId === "SB")
    {
      setCount((input.shortBreak)*60)
    }
    else{
      setCount((input.longBreak)*60)
    }
    
  };

  const handleSettingsButtonClick=()=>{
    setSettings(!isSettingsOpen)
  }
  return (
    <div className={styles["btn-container"]}>
      <button
        className={activeButton === "PB" ? styles.active : ""}
        onClick={() => {
          handleButtonClick("PB");
        }}
      >
        Pomodoro
      </button>
        
      <button
       className={activeButton === "SB" ? styles.active : ""}
        onClick={() => {
          handleButtonClick("SB");
        }}
      >
        Short Break
      </button>

      <button
       className={activeButton === "LB" ? styles.active : ""}
        onClick={() => {
          handleButtonClick("LB");
        }}
      >
        Long Break
      </button>
      <button 
      className={styles["settings-icon"]}
      onClick={handleSettingsButtonClick}
      
      > <Cog6ToothIcon className={styles["svg-icon"]} strokeWidth={2} height={32} width={32}/></button>
    </div>
  );
}
