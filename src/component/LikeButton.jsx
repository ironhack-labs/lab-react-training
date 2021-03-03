import React from 'react';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
      const COLORS = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
      return (
        <div>
        <span>{this.state.count}</span>
        <button style={{ backgroundColor: COLORS[this.state.count % COLORS.length] }} onClick={this.incrementCount} className="LikeButton">{this.state.count} Like{this.state.count !== 1 && 's'}</button>
        </div>
     );
    }
  }


export default LikeButton;