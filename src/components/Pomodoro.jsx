//styles
import styles from "./Pomodoro.module.css"

//components import
import PomoNav from "./PomoNav"
import PomoButton from "./PomoButton"


export default function Pomodoro() {
  return (
    <div className={styles.card}>
        <PomoNav/>
        <h1>50:00</h1>
        <PomoButton/>
    </div>
  )
}
