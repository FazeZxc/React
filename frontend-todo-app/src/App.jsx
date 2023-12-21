
import { useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: "at 10",
    id: 1
  },
  {
    title: "go to Home",
    description: " at 11",
    id: 2
  }]);


  return (
    <>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>

      })}
    </>
  )
}


function Todo(props) {
  return <div class="bold">
    {props.title}
    <br />
    {props.description}
  </div>
}



export default App
