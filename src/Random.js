// import React, { Component } from 'react';

// class Random extends Component {

//     getRandomNumber(min, max) {
//         return Math.floor(Math.random() * (max - min) + min);
//       }

//     render() {
//         return (
//             <div>
//                 {this.getRandomNumber(this.props.min, this.props.max)} 
//             </div>
//         );
//     }
// }

// export default Random;


import React from 'react';

function Random(props) {
    return (
        <div>
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
            
        </div>
    );
}

export default Random;