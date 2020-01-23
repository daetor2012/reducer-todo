import React, {useState, useReducer } from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/todosForm';

import { initialState, todoReducer } from './reducers/reducer';

function App() {
  

  const [todos, updateTodos] =  useState({})

  const [state, dispatch] = useReducer(todoReducer, initialState)

  console.log(state)

 const completedText = (itemId) => {

    dispatch({ type:'COMPLETE', payload: itemId })
  }

 const addTask = (itemText) => {
    const newTask = {
      title: itemText,
      completed: false,
      id: Date.now()
    }

    dispatch({ type: 'ADD_TODO', payload: newTask })

  }

 const clearCompleted = () => {
    let filteredTodos = state.tasks.filter(item => {
       return item.completed === false;
     })
 
  

    dispatch({ type:'CLEAR',payload: filteredTodos })
   }

  return (
    <div>
          <TodoList
          todoData={state}
          completedText={completedText}
          />
          <TodoForm 
          addTask={addTask}
          clearCompleted={clearCompleted}
          />
        </div>
        
      
  );
}

export default App;