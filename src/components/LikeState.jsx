import React from 'react'
import { Button } from 'react-bootstrap'
// import FontAwesome from 'react-fontawesome'


class LikeState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  moreLike = (e) => {
    const colorsBg = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const clickedBtn = e.target
    clickedBtn.style.backgroundColor = colorsBg[Math.floor(Math.random() * colorsBg.length)];
    this.setState({
      count: this.state.count + 1
    });
    clickedBtn.style.backgroundColor = clickedBtn
  }

  render() {
    return (
      <div className="d-flex">
        <Button onClick={this.moreLike}>{this.state.count}{this.state.count === 1 ? ' Like' : ' Likes'}</Button>
      </div>
    )
  }
}

export default LikeState