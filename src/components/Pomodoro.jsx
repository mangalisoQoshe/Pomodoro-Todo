//styles
import styles from "./Pomodoro.module.css";

//components import
import PomoNav from "./PomoNav";
import PomoButton from "./PomoButton";
import Counter from "./Counter";

import { useState } from "react";
import Settings from "./Settings";

export default function Pomodoro() {
  const [count, setCount] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [isSettingsOpen, setSettings] = useState(false);
  const [input, setInput] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  return (
    <div className={styles.card}>
      {isSettingsOpen && (
        <Settings
          input={input}
          isSettingsOpen={isSettingsOpen}
          setInput={setInput}
          setSettings={setSettings}
          setCount={setCount}
        />
      )}

      {!isSettingsOpen && (
        <>
          {" "}
          <PomoNav
            setCount={setCount}
            input={input}
            setSettings={setSettings}
            isSettingsOpen={isSettingsOpen}
          />
          <Counter
            count={count}
            setCount={setCount}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
          />
          <PomoButton setIsRunning={setIsRunning} isRunning={isRunning} count={count}/>
        </>
      )}
    </div>
  );
}
