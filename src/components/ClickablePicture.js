import React from 'react';

class ClickablePicture extends React.Component {

    state = {
        image: this.props.img
    }
    setImage(){
      if(this.state.image === this.props.img){this.setState({image: this.props.imgClicked})}
      else{this.setState({image: this.props.img})}
    }
   
  render() {
    console.log(this.state.image)
    return (
      <div className="clickablePicture">
        <img src= {process.env.PUBLIC_URL + this.state.image} alt="" onClick={()=>this.setImage()}/>
      </div>
    );
  }
}

export default ClickablePicture;