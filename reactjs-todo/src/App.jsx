import { useState } from "react"
import TodoCard from "./components/TodoCard"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() {
  const [todos, setTodos] = useState([
    "Go to Gym",
    "Eat healthy",
    "Focus on your Skills"
  ]);

  function handleaddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  return (
    <>
      <Todoinput handleaddTodos= {handleaddTodos} />
      <Todolist todos={todos}/>
    </>
  )
}

export default App
