import styles from "./Pomodoro.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Settings({ setSettings, input, setInput, updateTime }) {
  const [updateInput, setUpdateInput] = useState({
    ...input,
  });

  const handleXBtn = () => {
    setSettings(false);
    updateTime("pomodoro");
  };

  const handleSumbitBtn = (event) => {
    event.preventDefault();
    setInput({
      ...updateInput,
    });

    setSettings(false);
  };
  
  
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    console.log(id)
    switch (id) {
      case "shortBreak":
        setUpdateInput((prevState) => ({
          ...prevState,
          shortBreak: value,
          count:
            updateInput.activeBtn === "shortBreak"
              ? value * 60
              : updateInput.count,
        }));

        break;

      case "longBreak":
        setUpdateInput((prevState) => ({
          ...prevState,
          longBreak: value,
          count:
            updateInput.activeBtn === "longBreak"
              ? value * 60
              : updateInput.count,
        }));
        break;
      default:
        setUpdateInput((prevState) => ({
          ...prevState,
          pomodoro: value,
          count:
            updateInput.activeBtn === "pomodoro"
              ? value * 60
              : updateInput.count,
        }));
        break;
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
          value={updateInput.pomodoro}
          min={1}
          onChange={handleInputChange}
        />

        <label htmlFor="shortBreak">Short Break</label>
        <input
          type="number"
          id="shortBreak"
          value={updateInput.shortBreak}
          min={1}
          onChange={handleInputChange}
        />

        <label htmlFor="longBreak">Long break</label>
        <input
          type="number"
          id="longBreak"
          value={updateInput.longBreak}
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
};
