//styles
import styles from "./Pomodoro.module.css";

//components import
import PomoNav from "./PomoNav";
import PomoButton from "./PomoButton";
import Counter from "./Counter";

import { useState } from "react";
import Settings from "./Settings";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Pomodoro() {
  const [isRunning, setIsRunning] = useState(false);
  const [isSettingsOpen, setSettings] = useState(false);
  const [input, setInput] = useLocalStorage("pomodoro-data",{
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    activeBtn: "pomodoro",
    count: 1500,
  })

  const updateTime = (btnId) => {

    switch (btnId) {
      case "shortBreak":
        setInput((prevState) => ({
          ...prevState,
          count: input.shortBreak * 60,
          activeBtn: btnId,
        }));

        break;

      case "longBreak":
        setInput((prevState) => ({
          ...prevState,
          count: input.longBreak * 60,
          activeBtn: btnId,
        }));
        break;
      default:
        setInput((prevState) => ({
          ...prevState,
          count: input.pomodoro * 60,
          activeBtn: btnId,
        }));
        break;
    }

  };

  return (
    <div className={styles.card}>
      {isSettingsOpen && (
        <Settings
          input={input}
          isSettingsOpen={isSettingsOpen}
          setInput={setInput}
          setSettings={setSettings}
          updateTime={updateTime}
        />
      )}

      {!isSettingsOpen &&  (
        <>
          {" "}
          <PomoNav
            input={input}
            updateTime={updateTime}
            setInput={setInput}
            setSettings={setSettings}
            isSettingsOpen={isSettingsOpen}

          />
          <Counter
            input={input}
            setInput={setInput}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
          />
          <PomoButton
            setIsRunning={setIsRunning}
            isRunning={isRunning}
            input={input}
          />
        </>
      )}
    </div>
  );
}
