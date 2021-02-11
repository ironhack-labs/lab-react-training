import React from 'react';

function Random(props) {
    const sum = Math.floor(Math.random() * (props.max - props.min) + props.min);
    return(
        <div className='box'>
        <p>Random value between {props.min} and {props.max} => {sum}
        </p>
        </div>
    )
}
//import React, {Component} from 'react';
// class Random extends React.Component {
//  constructor(props){
//     super(props)
//  }
//  render () {
//     const {min, max} = this.props;
//     const randomNumber = Math.floor(Math.random() * (max - min) + min)
//     return <div>
//         <p>Random value between {min} and {max} => randomNumber</p>
//     </div>
// }
// }

export default Random;