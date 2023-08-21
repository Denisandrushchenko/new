

const TodoItem = function ({ todo, index, toggleCompleted }) {

    const { id, body, completed } = todo;
    return (

        <li className={completed ? "todo-item  line-throgh" : "todo-item"}>
            <input onChange={() => toggleCompleted(id)} checked={completed} type="checkbox" className="todo-item_complited" />
            <span className="todo-item_number" > {index + 1}</span>
            <p className="todo-item_text">  {body} </p>
            <div className="user-action">
                <button className="btn-icon user-action_del"> + </button>
            </div>
        </li>
    )


}

export default TodoItem;