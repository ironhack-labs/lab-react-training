import React from 'react';

class LikeButton extends React.Component {

    state = {
        name: `Alex`,
        counter: 0
    }

   
  render() {
    return (
      <div className="LikeButton">
        <button onClick={()=>this.setState({counter: (this.state.counter+1)})}>{this.state.counter} Likes</button>
      </div>
    );
  }
}

export default LikeButton;
