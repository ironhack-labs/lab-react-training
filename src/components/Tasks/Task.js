import React from 'react';
import './Tasks.css';

const Task = ({ task }) => {

  return (
    <div className="taskAll">
      <div className='tasks'>
    <p>{task.title}</p>
      </div>
    </div>
  );
};

export default Task;