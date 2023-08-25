
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, body: 'Learn Js', comleted: false },
    { id: 2, body: 'Learn Js', comleted: false },
    { id: 3, body: 'Learn Js', comleted: false },
    { id: 4, body: 'Learn Js', comleted: false }
  ])

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
          body: text
        }
      }
      return todo
    }))
  }

  const addTodo = body => {

    let id

    todos.length ? id = todos[todos.length - 1].id + 1 : id = 1

    setTodos([...todos, { id, body, comleted: false }]);
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
