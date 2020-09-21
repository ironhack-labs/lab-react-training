import React from 'react'
import { Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import Image from './Image'


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  nextImage = () => {
    this.setState({
      count: this.state.count === (this.props.imgs.length - 1) ? 0 : this.state.count + 1
    });
  }
  prevImage = () => {
    this.setState({
      count: this.state.count === 0 ? (this.props.imgs.length - 1) : this.state.count - 1
    });
  }
  render(props) {
    return (
      <div className="d-flex">
        <Button onClick={this.prevImage}><FontAwesome name={'chevron-left'} /></Button>
        <Image img={this.props.imgs[this.state.count]} />
        <Button onClick={this.nextImage}><FontAwesome name={'chevron-right'} /></Button>
      </div>
    )
  }
}

export default Carousel