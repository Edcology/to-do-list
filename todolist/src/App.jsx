import { GoPlus } from "react-icons/go";
import TodoInput from "./components/TodoInput";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

const App = () => {

  const [tasks, setTasks] = useState([])
  const [toggle, setToggle] = useState(false)

  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(), text: task, completed: false}])
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, completed: !task.completed} : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(
      tasks.filter(task => 
        task.id !== id
      )
    )
  }

  const editTask = (id, newmsg) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? {...task, text: newmsg} : task
      )
    )
  }

  
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">TODO List</h1>
      <hr className="mb-4" />
      <button 
      className="bg-blu text-white px-4 py-1 flex rounded-md"
      onClick={() => setToggle(!toggle)}
      ><GoPlus className="size-6 mr-2" />New Task</button>
      { toggle && <TodoInput addTask={addTask} onCancel={() => setToggle(false)} /> }
      <TodoItem tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
        
    </div>
  )
}

export default App