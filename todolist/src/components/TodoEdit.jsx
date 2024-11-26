import React, { useState } from 'react'
import { IoHandLeft } from 'react-icons/io5'

const TodoEdit = ({task, SetNewMsg, id, editTask, onEdited}) => {
    const [msg, setMsg] = useState('')
    const handleSubmit = (e) => {
        console.log(task);
        e.preventDefault()
        editTask(task.id, msg)
        onEdited()
    }

  return (
    <div>
        <p>Old Task: {task.text}</p>
        <div className='grid'>
            <input type="text" placeholder='Enter the new task' className='border focus:outline-none px-2 rounded-md mt-3'
            onChange={(e) => setMsg(e.target.value)}
            />
            <div className='flex gap-6 mt-4'>
                <button className='w-1/4 bg-red-600 text-white p-1 text-sm rounded-md hover:bg-red-700 transition' onClick={onEdited}>Cancel</button>
                <button className='w-1/4 bg-blue-600 text-white p-1 text-sm rounded-md hover:bg-blue-700 transition' type="submit" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    </div>
  )
}

export default TodoEdit