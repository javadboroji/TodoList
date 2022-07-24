import React from 'react'
import './Todo.css'
export default function Todo({todoText,toDos,todo,setTodoList}) {

    const eventDeletHandler= ()=>{
    
        setTodoList(toDos.filter( (e)=> e.id !== todo.id))
    }
    const checkHandler =()=>{

        setTodoList(toDos.map(item =>{
        
            if(item.id ===todo.id)
            return{
                ...item,
                compelet:!item.compelet,

                
            }
            return item
            
        }))
    }
    return (
        <div>
            <li key={toDos.id} className="d-flex pt-2 item">
                <h5 className={todo.compelet  ? "compelet" : " uncompelet"}> {todoText}</h5>
                <div>
                <button onClick={eventDeletHandler} className="button button-trash"><i className="fa fa-trash"></i></button>
                <button onClick={checkHandler} className="button"><i className="fa fa-check"></i></button>
                </div>

            </li>
        </div>
    )
}
