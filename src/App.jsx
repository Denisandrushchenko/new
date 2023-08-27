
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([ ])  

  useEffect( () => { 
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos =>  {
      setTodos(todos)
      
    })
  } ,  [])

   

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))

  }


  const toggleCompleted = (id) => {
    setTodos(
      todos.map(todo => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed }
        }

        return todo;
      })
    )
  }

  const editTodo = (id, text) => {

  
    setTodos(todos.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          title: text
        }
      }
      return todo
    }))
  }

  const addTodo = title=> {

    let id

    todos.length ? id = todos[todos.length - 1].id + 1 : id = 1

    setTodos([...todos, { id, title, comleted: false }]);
  }

  return (
    <div className="conteiner">
      <h1> ToDoApp </h1>
      <AddTodo addTodo={addTodo} />


      <div className="todos">

        {todos.length ? <TodoList todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo} editTodo={editTodo} /> : <h2> no todos  </h2>}







      </div>

    </div>

  );
}

export default App;
