import React from 'react'

export default function BoxColor(props) {
    
//     function getRandomColor (min,max){
//         min = Math.ceil(min);
//         max = Math.floor(max);

//         r = Math.floor(Math.random() * (max -min +1) +min);
//         g = Math.floor(Math.random() * (max -min +1) +min);
//         b = Math.floor(Math.random() * (max -min +1) +min);
//         return `color: ${r}, ${g}, ${b}, `
//     }

//    console.log(getRandomColor)
//     // let divStyle = {
//     //     color:
//     // }
//     return (
//         <div>
        
//         </div>
//     )

    return (
        <div className="boxColor" style= { { backgroundColor: `rgb(${props.r},${props.g},${props.b})`} }>
            <p>rgb ({props.r},{props.g},{props.b})</p>
        </div>
    )
}


// const BoxColor = (props) => {
//     return (
//         <div className="box-container" style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b}) ` }}>
//             <p>rgb = ({props.r},{props.g},{props.b})</p>
//         </div>
//     )
// }
// export default BoxColor; 