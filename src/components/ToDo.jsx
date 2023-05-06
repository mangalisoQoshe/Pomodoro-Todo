import { useState } from "react";
import InputForm from "./InputForm";
import TaskList from "./TaskList";
import EditForm from "./EditForm";

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id != id));
  };

  const enterEditMode = (task) => {
    setIsEditing(true);
    setEditedTask(task);
  };

  const closeEditMode=()=>{
    setIsEditing(false)
  }

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );

    closeEditMode();
  };

  return (
    <div>
      <InputForm addTask={addTask} />
      {isEditing && <EditForm editedTask={editedTask} updateTask={updateTask}/>}
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        enterEditMode={enterEditMode}
      />
    </div>
  );
}
