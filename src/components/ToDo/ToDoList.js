import React from "react";

const ToDoList = ({ projects, getUser, handleSort }) => {
  const [asc, setAsc] = React.useState(false);
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <table>
            <thead>
              <tr>
                <th>
                  Todo-Id
                  <a
                    onClick={() => {
                      setAsc(!asc);
                      handleSort(asc);
                    }}
                  >
                    <i class="material-icons left">
                      {asc ? "arrow_drop_down" : "arrow_drop_up"}
                    </i>
                  </a>
                </th>
                <th>Title</th>
                <th>Status</th>
                <th>User</th>
              </tr>
            </thead>

            <tbody>
              {projects &&
                projects.map((todo, index) => {
                  return (
                    <tr key={index}>
                      <td>{todo.id}</td>
                      <td>{todo.title}</td>
                      <td>{todo.completed ? "Complete" : "Incomplete"}</td>
                      <td>
                        <button
                          onClick={() =>
                            getUser(todo.userId, todo.id, todo.title)
                          }
                          className="btn pink lighten-1"
                        >
                          View-User
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
