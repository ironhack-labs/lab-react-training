import React from 'react';

class LikeButton extends React.Component {
    
    state = {
      count: 0,
      color: 0
    };
colors = ['purple','blue','green','yellow','orange','red']

    handleIncrementClick = () => {
        this.setState({
            count: this.state.count + 1
          });
      };
   
    
    render() {
      return <div>
          <button onClick={this.handleIncrementClick}> {this.state.count}Likes</button>
      </div>;
    }
  }

export default LikeButton;