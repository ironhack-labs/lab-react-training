import React from 'react';
import './Tasks.css';
import Task from './Task';

const Tasks = ( {tasks }) => {
    console.log(tasks)
  return (
    <div className="TasksAll">
      <div>
      Tasks
       </div>
       <p>{tasks.map(task => <Task task={task}/>)}</p>
    </div>
  );
};

export default Tasks;