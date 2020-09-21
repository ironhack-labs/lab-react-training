import React from 'react';
import './Carousel.css';

export default class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { img: this.props.imgs[0] };
  }

  rightMove() {
      if ({ img: this.props.imgs[0] }) {
        this.setState({ img: this.props.imgs[1] })
      } else if ({ img: this.props.imgs[1] }) {
        this.setState({ img: this.props.imgs[2] })
      } else if (({ img: this.props.imgs[2] })) {
        this.setState({ img: this.props.imgs[3] })
      } else if ({ img: this.props.imgs[3] }) {
        this.setState({ img: this.props.imgs[0] })
      }
    ;
  }



  render() {
    return (
      <div>
        <button onClick={() => this.getLike()}> Left</button>
        <img src={this.state.img} style={{width: '300px'}}/>
        <button onClick={() => this.rightMove()}> Right</button>
      </div>
    );
  }
}
