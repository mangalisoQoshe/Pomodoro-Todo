import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

export default function TaskList({ tasks, toggleTask, deleteTask,enterEditMode }) {
  return <ul role="list" className={styles.tasklist}>
    {tasks && tasks.sort((a,b)=>b.id - a.id).map(t=>{
        return <TaskItem 
        key={t.id} 
        task={t} 
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        enterEditMode={enterEditMode}/>
    })}
  </ul>;
}


