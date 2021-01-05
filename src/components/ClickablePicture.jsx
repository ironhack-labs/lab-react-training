import React from 'react';

class ClickablePicture extends React.Component {

state = {
        clicked: false,
    };

handleClick = () => {
    this.setState(({ clicked: !this.state.clicked }))
}

render() {      
  return <div onClick={this.handleClick}><img src={!this.state.clicked ? this.props.img : this.props.imgClicked} alt=""/></div>;
}
}

export default ClickablePicture;
