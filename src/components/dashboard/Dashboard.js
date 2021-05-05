import React from "react";
import User from "./User";
import ToDoList from "../ToDo/ToDoList";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const [search, setSearch] = React.useState("");
  const [toDoData, setToDoData] = React.useState([]);
  const toDo = useSelector((state) => state.toDo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setToDoData(result)
        dispatch({
          type: "CREATE_TODO",
          payload: result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = (id, todoId, todoTitle) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: "USER",
          payload: { user: result, todoId: todoId, todoTitle: todoTitle },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    if(e.target.value === '') {
      dispatch({
        type: "CREATE_TODO",
        payload: toDoData,
      });
    }
    setSearch(e.target.value)
  }

  const handleSearch = () => {
    toDoData.sort((a, b) => a.id - b.id)    
    
    dispatch({
      type: "CREATE_TODO",
      payload: toDoData,
    });

    const nameUpper = search.toUpperCase();
    const toDoList = [];

    if (search === "") {
      dispatch({
        type: "CREATE_TODO",
        payload: toDoData,
      });
    } else {
      toDoData.map((data) => {
        if (data.title.toUpperCase().includes(nameUpper)) {
          toDoList.push(data);
        }
      });
      dispatch({
        type: "CREATE_TODO",
        payload: toDoList,
      });
    }
  };

  const handleSort = (order) => {
    if(order) {
      toDo.toDo.sort((a, b) => a.id - b.id)
    } else {
      toDo.toDo.sort((a, b) => a.id - b.id).reverse()
    }
  }

  return (
    <div className="dashboard">
      <div className="row">
        <div className="col s12 m8">
          <div class="input-field">
            <input
              id="search"
              type="search"
              required
              onChange={handleChange}
            />
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </div>
        <div className="col s12 m3">
          <button onClick={() => handleSearch()} className="btn lighten-1">
            Search
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col s12 m8">
          <ToDoList projects={toDo.toDo} getUser={getUser} handleSort={handleSort} />
        </div>
        <div className="col s12 m3">
          <User
            user={toDo.user}
            todoId={toDo.todoId}
            todoTitle={toDo.todoTitle}
          />
        </div>
      </div>
    </div>
  );
}
