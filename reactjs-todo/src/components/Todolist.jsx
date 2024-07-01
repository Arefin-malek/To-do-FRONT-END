import React from 'react'
import TodoCard from './TodoCard'

export default function Todolist(props) {
  const{todos } = props
  
  return (
    <ul className='main'>
      {todos.map((todo , todoind)=>{
        return(
          <TodoCard key={todoind} todo={todo}>
          <p>{todo}</p>  
          </TodoCard>
          
        )
      })}
    </ul>
  )
}
