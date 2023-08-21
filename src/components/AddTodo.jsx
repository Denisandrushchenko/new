import { useState } from "react";


const AddTodo = function ({ addTodo }) {
   
   const [body , setBody ] = useState('');
   
   const addBtnHandler = (text) => {
      addTodo(text);
      setBody('');
   }
   return <div className="add-todo">

      <input type="text" className="add-todo_input" onChange={ (e) => setBody(e.target.value)} value={ body }/>

      <button className="add-todo_btn" onClick={() => addBtnHandler(body)
        
      }> add todo </button>

   </div>


}

export default AddTodo;