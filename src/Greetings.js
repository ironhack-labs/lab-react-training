// import React, { Component } from 'react';

// export default class Greetings extends Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }
function Greetings(props) {
  return (
    <div>
      <h3>
        {props.lang}, {props.name}
      </h3>
    </div>
  );
}

export default Greetings;
