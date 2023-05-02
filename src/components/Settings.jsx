import styles from "./Pomodoro.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export default function Settings({
  setSettings,
  input,
  setInput,
  isSettingsOpen,
  setCount,
}) {
  const handleXBtn = () => {
    setSettings(!isSettingsOpen);
  };

  const handleSumbitBtn = (event) => {
    event.preventDefault();
    setSettings(!isSettingsOpen);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInput((prevState) => ({ ...prevState, [id]: value }));
    if(id === "pomodoro"){
      setCount(value * 60)
    }
  };
  return (
    <div className={styles.settings}>
      <h1 className={styles.heading}>Settings</h1>{" "}
      <button className={styles["exit-btn"]} onClick={handleXBtn}>
        <XMarkIcon
          className={styles["svg-icon"]}
          strokeWidth={2}
          height={32}
          width={32}
        />
      </button>
      <h1 className={styles["form-heading"]}>Time [minutes]</h1>
      <form className={styles.form} id="form">
        <label htmlFor="pomodoro">Pomodoro</label>
        <input
          type="number"
          id="pomodoro"
          value={input.pomodoro}
          min={1}
          onChange={handleInputChange}
        />

        <label htmlFor="shortBreak">Short Break</label>
        <input
          type="number"
          id="shortBreak"
          value={input.shortBreak}
          min={1}
          onChange={handleInputChange}
        />

        <label htmlFor="longBreak">Long break</label>
        <input
          type="number"
          id="longBreak"
          value={input.longBreak}
          min={1}
          onChange={handleInputChange}
        />

        <button className={styles["form-btn"]} onClick={handleSumbitBtn}>
          Apply
        </button>
      </form>
    </div>
  );
}

Settings.propTypes = {
  className: PropTypes.string,
  isSettingsOpen: PropTypes.bool.isRequired,
  setSettings: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
  setInput: PropTypes.func.isRequired,
  setCount: PropTypes.func.isRequired,
};
