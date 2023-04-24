//styles
import styles from "./Pomodoro.module.css"

//components import
import PomoNav from "./PomoNav"
import PomoButton from "./PomoButton"
import Counter from "./Counter"


export default function Pomodoro() {
  return (
    <div className={styles.card}>
        <PomoNav/>
        <Counter count="69:00"/>
        <PomoButton/>
    </div>
  )
}
