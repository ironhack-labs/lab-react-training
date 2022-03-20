import React, {Component} from 'react';


// class ClickablePicture extends Component {
//   constructor(props){
//     super(props);
//     this.state({
//       image: this.props.img
//     })
//   }
//   clickEffect = () => {
//     this.setState({
//       image: this.props.imgClicked
//     })
//   }
//   render(){
//     return(
//         <div>
//           <img onClick={this.clickEffect} src={this.state.image} alt="man"/>
//         </div>
//     )
//   }
// }
const ClickablePicture = (props) => {
  return(
    <div>
      <img src={props.img } alt="man without glases"/>
    </div>
  )
}

export default ClickablePicture;
