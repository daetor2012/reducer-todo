import React from "react";
import Todo from "./todos";


const TodoList = (props) => {

   
    
    return (
        <div>
            {props.todoData.tasks.map(item => {
                    
                    return (
                        <Todo
                        item={item}
                        key ={item.id} 
                        title={item.title}
                        completed ={item.completed}
                        completedText={props.completedText}
                        />
                    )
                })
             
            }
            
        </div>
    );
}

export default TodoList;