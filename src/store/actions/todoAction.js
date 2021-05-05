export const createToDo = (toDo) => {
  return (dispatch) => {
    dispatch({ type: "CREATE_PROJECT", toDo });
  };
};

export const createUser = (user, todoId, todoTitle) => {
  return (dispatch) => {
    dispatch({ type: "USER", payload: {user: user, todoId: todoId, todoTitle: todoTitle} });
  };
};
