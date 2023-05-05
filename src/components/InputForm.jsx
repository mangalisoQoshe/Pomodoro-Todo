import { PlusIcon } from "@heroicons/react/24/solid";
import styles from "./InputForm.module.css";
import { useState } from "react";

export default function InputForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addTask({ name: task, checked: false, id: Date.now() });
    setTask("");
  };
  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          required
          className={styles.input}
          maxLength={60}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />

        <button className={styles.submitBtn} type="submit">
          <PlusIcon stroke="2" width={20} height={19} />
        </button>
      </form>
    </div>
  );
}
