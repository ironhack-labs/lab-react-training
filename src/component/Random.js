import React from 'react';

const App = (props) => {
  const random = Math.floor(Math.random() * props.max) + props.min;
  return (
    <div className="box">
      Random value between {props.min} and {props.max} =&gt; {random}
    </div>
  );
};

export default App;
