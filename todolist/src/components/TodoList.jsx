import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";
import TodoEdit from "./TodoEdit";


const TodoList = ({deleteTask, task, toggleTask, editTask}) => {

    const [newmsg, setNewMsg] = useState('')
    const [clicked, setClicked] = useState(false)
    const [edit, setEdit] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
  return (
    <li
    className='border p-4 rounded-md cursor-pointer mb-4'
    style={{textDecoration: task.completed ? 'line-through' : "none"}}
    >
        <input type="checkbox" name="" id="done" className="size-4 mr-4" defaultChecked={task.completed} />
        <span className="" onClick={() => {
            setClicked(!clicked)
            handleCurrent(task)
            }}>{task.text}</span>
        {
            clicked && 
            <div className="flex gap-3 ml-8 mt-3 transition">
                <IoCheckmarkDone className="size-5" onClick={() => toggleTask(task.id)} />
                <MdDeleteOutline className="size-5" onClick={() => deleteTask(task.id)} />
                <MdOutlineEdit className="size-5" onClick={() => setEdit(true)} />
            </div>
        }
        { edit && <TodoEdit setNewMsg={setNewMsg} task={task} id={task.id} editTask={editTask} onEdited={() => setEdit(false)} /> }

    </li>
  )
}

export default TodoList