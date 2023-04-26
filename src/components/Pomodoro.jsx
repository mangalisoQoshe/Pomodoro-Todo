//styles
import styles from "./Pomodoro.module.css"

//components import
import PomoNav from "./PomoNav"
import PomoButton from "./PomoButton"
import Counter from "./Counter"




import { useState } from "react"


export default function Pomodoro() {
  const [count, setCount] = useState("25:00");
  return (
    <div className={styles.card}>
        <PomoNav setCount={setCount}/>
        <Counter count={count}/>
        <PomoButton/>
    </div>
  )
}
