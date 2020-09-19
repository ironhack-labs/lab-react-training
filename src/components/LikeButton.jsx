import React from 'react'


  
  export default class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { backgroundColor: "" };
      this.i = 0;
      this.j = 0;
      this.color = ['purple','blue','green','yellow','orange','red']
    }
  
    changeButton() {
      if (this.j >= this.color.length) {
          this.j = 0;
      }
      this.setState({ backgroundColor: this.color[this.j] })
      this.i++;
      this.j++;
    }

    render() {
      return (
        <button
          className="Button"
          style={{ backgroundColor: this.state.backgroundColor }}
          onClick={() => this.changeButton()}
        >
          {this.i} Likes
        </button>
      );
    }
  }

