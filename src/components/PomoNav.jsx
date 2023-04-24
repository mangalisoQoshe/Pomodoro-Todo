//styles
import styles from "./Pomodoro.module.css";

//component import
import Button from "./Button";

export default function PomoNav() {
  return (
    <div className={styles["btn-container"]}>
      <Button className={styles["active"]}>Pomodoro</Button>

      <Button>Short Break</Button>

      <Button>Long Break</Button>
    </div>
  );
}
