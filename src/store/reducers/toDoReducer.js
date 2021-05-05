const initState = {
  toDo: [],
  user: [],
  todoId: '',
  todoTitle: ''
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return { ...state, toDo: action.payload };
    case "USER":
      return { ...state, user: action.payload.user, todoId:action.payload.todoId, todoTitle: action.payload.todoTitle  };
    default:
      return { ...state };
  }
};

export default projectReducer;
