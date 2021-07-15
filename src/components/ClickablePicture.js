import React from 'react'

class ClickablePicture extends React.Component {
  
    state = {
        clicked: false
    }
    
    toggleImage = () => {

      this.setState((state) => ({
        clicked: !state.clicked
      }));
    }
   
    render() {
      //console.log(this.state);

      return (
        <div style={{backgroundColor:'yellow'}}>
          <img onClick= {this.toggleImage} src= {this.state.clicked ? this.props.imgClicked : this.props.img} />
        </div>
      );
    }
  }

export default ClickablePicture ; 

