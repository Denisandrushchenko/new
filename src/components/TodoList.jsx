import TodoItem from "./TodoItem";

const TodoList = function ({ todos, toggleCompleted , removeTodo , editTodo }) {


    return <ul className="todo-list">

        {

            todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} index={index} toggleCompleted={toggleCompleted} removeTodo = {removeTodo} editTodo = {editTodo}/>)
        }

    </ul>
}

export default TodoList;