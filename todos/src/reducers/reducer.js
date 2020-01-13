export const initialState = {
    tasks: [
        {
          id:1,
          title: "What now boy?",
          completed: false
        }
    ]
        
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {state,tasks: [...state.tasks, action.payload]};
        case "COMPLETE" :
          return {...state,tasks: state.tasks.map(item => {
        
        if(action.payload === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        };
        
        return item
      })
    }
    case "CLEAR" :
      return {...state,tasks: action.payload}
        default:
          return state;
    }
};