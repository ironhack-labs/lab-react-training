import React, { useState } from 'react';
// rfc => React functioncomponent
// rafc => React arrow function component
// _rfc => New react component with no export from react

//props => makes a component dinamic

const LikeButton = ({ initialCounter }) => {
  //Hooks shoukd akways be called here

  const [counter, setCounter] = useState(() => initialCounter);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  //     getter -   setter
  //Use state does not have a general state per component, each property will have its useState

  function increment() {
    //Podemos pasar un callback al setter de un use stte
    setCounter((currentCounter) => currentCounter + 1);
  }

  return (
    <div>
      <button onClick={increment} style={{ backgroundColor: colors[counter] }}>
        {counter} likes
      </button>
    </div>
  );
};

export default LikeButton;
