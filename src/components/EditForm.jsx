import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import styles from "./Editform.module.css";

export default function EditForm({ editedTask, updateTask }) {
  const [updateValue, setUpdatevalue] = useState(editedTask.name);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updateValue });
  };

  return (
    <>
      <div role="dialog" />
      <form onSubmit={handleFormSubmit} className={styles["edit-form"]}>
        <input
          type="text"
          className={styles["update-task"]}
          autoFocus
          maxLength={60}
          placeholder="Update Task"
          required
          value={updateValue}
          id="editedTask"
          onChange={(e) => {
            setUpdatevalue(e.target.value);
          }}
        />
        <label htmlFor="editedTask" className={styles.label}>
          Update Task
        </label>
        <button className={styles.btn} type="submit">
          <CheckIcon strokeWidth={2} height={32} width={32} />
        </button>
      </form>
    </>
  );
}
