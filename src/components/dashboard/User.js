import React from "react";

const Notifications = ({ user, todoId, todoTitle }) => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title ">User Details</span>
          <div>
            <p>{todoId ? 'Todo Id: '+todoId : ''}</p>
            <p>{todoTitle ? 'Todo Title: '+todoTitle : ''}</p>
            <p>{user.id ? 'User ID: '+user.id : ''}</p>
            <p>{user.name ? 'Name: '+user.name : ''}</p>
            <p className="grey-text">{user.email ? 'Email: '+user.email : ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
