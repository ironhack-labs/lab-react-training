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
}

    render(){
    return (
        <div
          className="boxColor"
          style={{ backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
          width: 150,
          height: 200 }}
        >
          <p>{`rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`}</p>
        
        </div>
      );
    }



}

export default BoxColor;