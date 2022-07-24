import React from 'react'
import './Form.css'

export default function Form({inputText,setInputText,setTodoList,todoList,setStatus}) {

    const inputTextHandler =(e)=>{
        setInputText(e.target.value)

    }

    const addTodoListHandler =(e)=>{
        e.preventDefault()
        setTodoList([
            ...todoList,
            {
                text:inputText, compelet:false,id:Math.random()*1000
            }
        ])
    }

    const statusHandler =(e)=>{
        setStatus(e.target.value)
    }

    return (
        <form className="d-flex form">
            <div className="input-box">
            <input type="text" value={inputText} onChange={inputTextHandler} className="form-control form-inp m-3" name="" id=""  placeholder=""/>
              <button onClick={addTodoListHandler} className="m-3 P-5 form-button">
                  <i className="fa fa-plus"></i>
              </button>
            </div>
              
              <div className="select ">
                  <select onChange={statusHandler} name="to-do" className="filter-todo  p-1">
                      <option value="all">همه</option>
                      <option value="compelet">تکمیل شده</option>
                      <option value="uncompelet">تکمیل نشده</option>

                      
                  </select>
              </div>
            
           
        </form>
    )
}
