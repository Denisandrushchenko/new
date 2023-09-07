import { useContext } from "react";
import TodoItem from "./TodoItem";
import Context from "../context";

const TodoList = function () {
const {todos} = useContext(Context)

    return <ul className="todo-list">

        {

            todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} index={index} />)
        }

    </ul>
}

export default TodoList;