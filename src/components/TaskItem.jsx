import styles from "./TaskItem.module.css";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

export default function TaskItem() {
  return (
    <li>
      <div className={styles.task}>
        <label htmlFor="" className={styles.label}>
          <input type="checkbox" className={styles.checkbox}/>
          Task Name
        </label>
        <div className={styles["btn-container"]}> 
          <button className={styles.btn}>
            <PencilSquareIcon stroke="2" width={32} height={32} />
          </button>
          <button className={styles.btn}>
            <TrashIcon stroke="2" width={32} height={32}/>
          </button>
        </div>
      </div>
    </li>
  );
}
