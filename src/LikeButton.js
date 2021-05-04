import React from 'react';
// import Stars from './Stars';

export default class LikeButton extends React.Component {
  constructor(state, props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }
  clickHandler = () => {
    console.log('click');
    this.setState((state) => ({
      likes: this.state.likes + 1,
    }));
  };

  render() {
    return (
      <div className="LikeButton">
        <button onClick={this.clickHandler}>LIKE {this.state.likes}</button>
      </div>
    );
  }
}
