import React, { useState } from 'react';

const Dice = () => {
  const [value, setValue] = useState(3);

  const handleClick = () => {
    const random = () => Math.floor(Math.random() * 6 + 1);
    setValue('empty');
    setTimeout(() => setValue(random(value)), 1000);
  };

  console.log(`value`, value);

  return (
    <div>
      <img
        onClick={handleClick}
        src={`./img/dice${value}.png`}
        alt="dice_value"
      />
    </div>
  );
};

export default Dice;

// import React, { Component } from 'react';

// export class Dice extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 3 };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     const random = () => Math.floor(Math.random() * 6 + 1);
//     this.setState({ value: 'empty' });
//     setTimeout(() => this.setState({ value: random(this.state.value) }), 1000);
//   }

//   render() {
//     return (
//       <div className="dice">
//         <img
//           onClick={this.handleClick}
//           src={`./img/dice${this.state.value}.png`}
//           alt="dice_value"
//         />
//       </div>
//     );
//   }
// }

// export default Dice;
