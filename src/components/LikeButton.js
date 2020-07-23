import React, { Component } from 'react'
 
class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.buttonClicked = this.buttonClicked.bind(this);
      }
      buttonClicked(event) {
        this.setState({value: this.state.value+1});
      }
      changeColor(event){
      }

    render() {
        return (
            <div>
                <div>
            <button onClick={this.buttonClicked}>{this.state.value}  Click</button>
          
            </div>
            </div>
        )
    }
}

export default LikeButton
