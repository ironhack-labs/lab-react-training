import React from 'react';

// const BoxColor = ({ r, g, b }) => {

//   return (
//     <div
//       className="boxColor"
//       style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
//     >
//       <p>{`rgb(${r}, ${g}, ${b})`}</p>
      
//     </div>
//   );
// };


class BoxColor extends React.Component {

    constructor(props) {
        super(props);
        this.r = props.r;
        this.g = props.g;
        this.b = props.b;

    }

    render(){
    return (
        <div
          className="boxColor"
          style={{ backgroundColor: `rgb(${this.r}, ${this.g}, ${this.b})` }}
        >
          <p>{`rgb(${this.r}, ${this.g}, ${this.b})`}</p>
        
        </div>
      );
    }



}

export default BoxColor;