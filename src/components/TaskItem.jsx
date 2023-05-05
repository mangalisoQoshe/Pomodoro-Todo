import styles from "./TaskItem.module.css";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  const [ischecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = () => {
    setIsChecked(!ischecked);
    toggleTask(task.id);
  };
  return (
    <li className={styles.item}>
      <div className={styles.task}>
        <label htmlFor={task.id} className={styles.label}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={ischecked}
            onChange={handleCheckboxChange}
            name={task.name}
            id={task.id}
          />
          <span className={ischecked ? `${styles["txt-decoration"]}` : ""}>
            {task.name}
          </span>
        </label>
        <div className={styles["btn-container"]}>
          <button className={styles.btn}>
            <PencilSquareIcon stroke="2" width={32} height={32} />
          </button>
          <button className={styles.btn} onClick={(e)=>{deleteTask(task.id)}}>
            <TrashIcon stroke="2" width={32} height={32} />
          </button>
        </div>
      </div>
    </li>
  );
}
