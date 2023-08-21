import TodoItem from "./TodoItem";

const TodoList = function ({ todos, toggleCompleted }) {


    return <ul className="todo-list">

        {

            todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} index={index} toggleCompleted={toggleCompleted} />)
        }

    </ul>
}

export default TodoList;