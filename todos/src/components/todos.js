import React from 'react';

const Todo = (props) => {
    
    return (
        <div>
            <h1>{props.title}</h1>
            
                <div onClick={e => props.completedText(props.item.id)}>Completed</div>
            
            
        </div>
    );
}

export default Todo;