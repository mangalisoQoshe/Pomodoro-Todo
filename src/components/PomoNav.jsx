
import styles from "./Pomodoro.module.css";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

export default function PomoNav({
  input,
  updateTime,
  setSettings,
}) {


  const handleSettingsButtonClick = () => {
    setSettings(true);

  };
  return (
    <div className={styles["btn-container"]}>
      <button
        className={input.activeBtn === "pomodoro" ? styles.active : ""}
        onClick={() => {
          updateTime("pomodoro");
        }}
      >
        Pomodoro
      </button>

      <button
        className={input.activeBtn === "shortBreak" ? styles.active : ""}
        onClick={() => {
          updateTime("shortBreak");
        }}
      >
        Short Break
      </button>

      <button
        className={input.activeBtn === "longBreak" ? styles.active : ""}
        onClick={() => {
          updateTime("longBreak");
        }}
      >
        Long Break
      </button>
      <button
        className={styles["settings-icon"]}
        onClick={handleSettingsButtonClick}
      >
        {" "}
        <Cog6ToothIcon
          className={styles["svg-icon"]}
          strokeWidth={2}
          height={32}
          width={32}
        />
      </button>
    </div>
  );
}

PomoNav.propTypes = {
  className: PropTypes.string,
  isSettingsOpen: PropTypes.bool.isRequired,
  setSettings: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
  updateTime: PropTypes.func.isRequired,
};
