import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [glassesOn, setGlassesOn] = useState(false);

  const handleClick = () => {
    setGlassesOn(!glassesOn);
  };

  return (
    <div>
      <img
        onClick={handleClick}
        src={glassesOn ? img : imgClicked}
        alt="Max with glasses or not"
      />
    </div>
  );
};

export default ClickablePicture;

// import React, { Component } from 'react';

// export class ClickablePicture extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       glassesOn: false,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({ glassesOn: !this.state.glassesOn });
//   }

//   render() {
//     const { img, imgClicked } = this.props;
//     return (
//       <div>
//         <img
//           onClick={this.handleClick}
//           src={this.state.glassesOn ? img : imgClicked}
//           alt="Max with glasses or not"
//         />
//       </div>
//     );
//   }
// }

// export default ClickablePicture;
