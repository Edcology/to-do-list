import { useState } from "react"

const TodoInput = ({addTask, onCancel}) => {

  const [added, setAdded] = useState(true)
  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      addTask(text)
      setText("")
      console.log(text);
      onCancel()
    }
  }

  return (
    added &&
    <div className="shadow-md py-12 absolute w-1/3 grid justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border backdrop-blur-md">
        <form className="grid gap-4" onSubmit={handleSubmit}>
            <input type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter task"
            className="border-b focus:outline-none text-center px-2 py-1" />
            <div className="flex col-span-2 gap-4">
              <button className="w-full bg-red-600 text-white p-1 text-sm rounded-md hover:bg-red-700 transition" type="button"
              onClick={onCancel}
              >Cancel</button>
              <button className="w-full bg-blue-600 text-white p-1 text-sm rounded-md hover:bg-blue-700 transition" type="submit">Add</button>
            </div>
        </form>
    </div>
  )
}

export default TodoInput