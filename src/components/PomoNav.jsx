//styles
import { useState } from "react";
import styles from "./Pomodoro.module.css";

//library imports
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

//component import

export default function PomoNav({setCount}) {
  const [activeButton,setActiveButton] = useState("PB");

  const handleButtonClick = (btnId) => {
    setActiveButton(btnId);
    if(btnId === "PB"){
      setCount("25:00")
    }

    else if(btnId === "SB")
    {
      setCount("15:00")
    }
    else{
      setCount("5:00")
    }
    
  };
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
      <button className={styles["settings-icon"]}> <Cog6ToothIcon className={styles["svg-icon"]} strokeWidth={2} height={30} width={30}/></button>
    </div>
  );
}
