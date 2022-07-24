import React from 'react'
import Todo from './Todo'
import "./Todo.css"
export default function TodoList({toDo,setTodoList,filterTodos}) {
    return (
        <div className='list-item-box'>
            <ul className="list-item">
        
               {filterTodos.map((todo)=>(
                   
                   <Todo todoText={todo.text} 
                   key={todo.id}
                   todo={todo} 
                   toDos={toDo} 
                   
                   setTodoList={setTodoList} />
               ))} 
            </ul>
            
        </div>
    )
}
