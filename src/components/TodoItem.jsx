import { useState } from "react";


const TodoItem = function ({ todo, index, toggleCompleted, removeTodo, editTodo }) {

    const { id, title , completed } = todo;
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(title)

    function editHandler() {
        setEdit(!edit)

        if (edit) {
            editTodo(id, text)
        }
    }

    return (

        <li className={completed ? "todo-item  line-throgh" : "todo-item"}>
            <input onChange={() => toggleCompleted(id)} checked={completed} type="checkbox" className="todo-item_complited" />
            <span className="todo-item_number" > {index + 1}</span>
            {!edit ? <p className="todo-item_text">  {title} </p> : <input onChange={e => setText(e.target.value)} value={text} />}

            <div className="user-action">
                <button onClick={editHandler}> {!edit ? ' edit ' : 'save' } </button>
                <button className="btn-icon user-action_del" onClick={() => removeTodo(todo.id)}> <span className="btn-icon_del">  + </span>  </button>
            </div>
        </li>
    )


}

export default TodoItem;