import Button from "./Button"

//styles
import styles from "./Pomodoro.module.css";

export default function PomoButton() {
  return (
    <Button className={styles["start-btn"]}>Start</Button>
  )
}
