import React from 'react';

const DeveloppersList = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.devs.map((dev) => {
        if (dev.language === props.title) {
          return (
            <div>
              <p>{dev.firstName}</p>
              <p>{dev.country}</p>
              <p>{dev.language}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DeveloppersList;
