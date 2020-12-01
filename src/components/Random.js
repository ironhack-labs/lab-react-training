import React from 'react'

export default function Random (props) {
 
    return (
        <p>Random value between {props.min} and {props.max} = {Math.floor(Math.random() * (props.max - props.min) + props.min)}</p>
    )    
}



// export default class Random extends React.Component {

//     getRandomInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min) + min);
//     }

//     render() { 
//         return <p>Random value between {this.props.min} and {this.props.max} = {this.getRandomInt(this.props.min,this.props.max)}</p>
    
//     }
// }


// export default function Random (props) {

//     function getRandomInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return ;
//     }

    
//     return (
//         <p>Random value between {props.min} and {props.max} = {getRandomInt(props.min, props.max)}</p>
//     )    
// 


