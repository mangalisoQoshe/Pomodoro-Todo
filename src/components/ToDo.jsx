import { PlusIcon } from "@heroicons/react/24/solid";
import styles from "./ToDo.module.css"
import { useState } from "react";
import TaskItem from "./TaskItem";


export default function ToDo() {
  const [input, setInput] = useState("")

const handleInputChange=(event)=>{
  setInput(event.target.value)
  console.log(input)
}
  return (
    <div className={styles["form-container"]}>
      <h1 className={styles.heading}> My Task List</h1>

      <form >
        <input 
        type="text" 
        placeholder="Enter Task"
        value={input}
        required
        className={styles.input}
        maxLength={60}
        onChange={handleInputChange}
        />

        <button className={styles.submitBtn}>
          <PlusIcon stroke="2" width={20} height={19} />
        </button>
      </form>
      <TaskItem/>
    </div>
  );
}
