//With class components
// import { Component } from 'react';

// class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         <p>This is a like button</p>
//         <button onClick={this.increment}>{this.state.count}👍🏽</button>
//       </>
//     );
//   }
// }

// export default Counter;

//With hooks

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => (prevState = prevState + 1));
  };

  return (
    <>
      <p>This is a like button</p>
      <button onClick={increment}>{count}👍🏽</button>
    </>
  );
};

export default Counter;
