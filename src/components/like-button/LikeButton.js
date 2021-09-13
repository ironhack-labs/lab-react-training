import { Component } from 'react';

class LikeButton extends Component {
  state = {
    value: this.props.startAt,
    colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    handleClick: this.handleClick.bind(this),
  };

  handleClick() {
    this.setState(prevState => ({
      ...prevState,
      value: prevState.value + 1,
    }));
  };

  render() {
    let colorIndex = this.state.value % this.state.colors.length;
    return (
      <div className="container">
        <button
          type="button"
          className="btn mb-1"
          onClick={this.handleClick}
          style={{
            backgroundColor: this.state.colors[colorIndex],
            color: 'white',
          }}
        >
          {this.state.value} Like{this.state.value !== 1 && 's'}
        </button>
      </div>
    );
  }
}

LikeButton.defaultProps = {
  startAt: 0,
};

export default LikeButton;
