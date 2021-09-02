// import React from 'react';
// import "./Carousel.css";

// export default class Carousel extends React.Component {
//       state = {
//           index: 0,
//       }
    
//       nextImg = () => {
//         this.setState({
//             index:
//                 this.state.index === 0
//                   ? this.props.imgs.length - 1
//                   : this.state.index - 1
//             });
//       }

//       prevImg = () => {
//         this.setState({
//             index:
//               this.state.index === this.props.imgs.length - 1
//                 ? 0
//                 : this.state.index + 1,
//           });
//       }

//       render() {
//         return (
//             <div>
//                 <button onClick={this.prevImg}>Left</button>
//                 <img src={this.props.imgs(this.state.index)} alt="Carousel imgage" />
//                 <button onClick={this.nextImg}>Right</button>
//             </div>
//         );
//       }
// }