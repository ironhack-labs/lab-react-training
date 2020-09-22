// import React, { Component } from 'react'


// export default class Carousel extends Component {
//     state = {
//         currentPic: 0,
//         nextPic: 0
//     }
    
//     handleLeftBtn = () => {
//       this.setState((state) => ({ currentPic: state.currentPic === 0 ? nextPic(3) : nextPic(currentPic - 1)}))
//     }

//     handleRightBtn = () => {
//         this.setState((state) => ({ currentPic: state.currentPic === 3 ? nextPic(0) : nextPic(currentPic + 1)}))
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={handleLeftBtn()}>left</button>
//                 <img src={props.imgs} />
//                 <button onClick={handleRightBtn()}>right</button>
//             </div>
//         )
//     }
// }
