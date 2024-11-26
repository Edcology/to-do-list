import TodoList from "./TodoList"

const TodoItem = ({tasks, toggleTask, deleteTask, editTask}) => {
  return (
    <div className="grid gap-4 mt-6">
      <ul>
        {
          tasks.map(task => 
            <TodoList task={task} toggleTask={toggleTask} deleteTask={deleteTask} key={task.id} editTask={editTask} />
          )
        }
      </ul>
    </div>
  )
}

export default TodoItem