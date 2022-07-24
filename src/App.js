import React,{useState,useEffect} from 'react'
import{Col,Row,Container}from 'react-bootstrap'
import './App.css'

import Form from './components/Form'

import TodoList from './components/TodoList'

export default function App() {

const [inputText, setInputText] = useState("");

const [todoList, setTodoList] = useState([])

const [status, setStatus] = useState("all")

const [filterTodos, setFiltereTodos] = useState([])

useEffect(() => {
  const filterHandler =()=>{
    switch(status){
      case 'compelet':
        setFiltereTodos(todoList.filter((todo)=>todo.compelet ===true))
        break;
        case 'uncompelet':
        setFiltereTodos(todoList.filter((todo)=>todo.compelet===false))
        break;
        default:
          setFiltereTodos(todoList)
          break;
    }
  }
  filterHandler()
},[todoList,status])




  return (
    <Container>
      <Row  className="justify-content-md-center align-item-center">
          <Col md={12}>
            <h1 className="text-center m-auto w-100"> To Do List</h1>
          </Col>

          <Col md={12}>
          
              <Form 
              todoList={todoList}
              setTodoList={setTodoList}
              inputText={inputText}
              setInputText={setInputText} 
              setStatus={setStatus}
              />

              <TodoList filterTodos={filterTodos} toDo={todoList} setTodoList={setTodoList}/>
          </Col>
    </Row>
    </Container>
   
    
  )
}



