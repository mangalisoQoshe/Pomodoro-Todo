import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";


export default function EditForm({editedTask,updateTask}) {
  const [updateValue, setUpdatevalue] = useState(editedTask.name);

const handleFormSubmit=(e)=>{
    e.preventDefault()
    updateTask({...editedTask,name:updateValue})
    
}

  return (
    <div role="dialog">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoFocus
          maxLength={60}
          placeholder="Update Task"
          required
          value={updateValue}
          id="editedTask"
          onChange={(e) => {
            setUpdatevalue(e.target.value);
          }}
        />
        <label htmlFor="editedTask">Update Value</label>
        <button type="submit"><CheckIcon strokeWidth={2} height={32} width={32}/></button>
      </form>
    </div>
  );
}
