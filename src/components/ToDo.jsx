import { useState } from "react";
import InputForm from "./InputForm";
import TaskList from "./TaskList";

export default function ToDo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };
  const deleteTask = (id) => {
    setTasks((prevState) => 
      prevState.filter((t) =>  t.id != id ));
  };
  return (
    <div>
      <InputForm addTask={addTask} />
      <TaskList 
      tasks={tasks} 
      toggleTask={toggleTask}
      deleteTask={deleteTask} />
    </div>
  );
}
