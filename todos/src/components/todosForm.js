import React, { useState } from 'react';

const TodoForm = (props) => {

    const [itemText, updateItemText] = useState("");
    
    const changeHandler = (event) => {
        updateItemText(event.target.value)
        
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        if(itemText === "") {
            return;
        }else {
            props.addTask(itemText)
            updateItemText("");
        }
        
    }


    return (
        <div>
                <form onSubmit={submitHandler}>
                <input 
                type="text" 
                name="itemText" 
                value={itemText} 
                placeholder="Task.."
                onChange={changeHandler}
                />
                <button type="submit">Submit</button>
                </form>
                <button
                onClick={props.clearCompleted}
                >Clear</button>
            </div>
    );
}

export default TodoForm;