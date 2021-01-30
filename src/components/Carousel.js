import React from 'react'
import './Carousel.css'

class Carousel extends React.Component {

constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
    this.state = {
        i: 0,
        img: this.props.imgs[0]
    }
}

handleClick(n) {

    let ind = this.state.i + n
    const l = this.props.imgs.length - 1;

    if (ind > l) {
        ind = 0    
    }

    if (ind < 0) {
        ind = l
    }

    this.setState({
        img: this.props.imgs[ind],
        i: ind
    })
}

render() {
    return(
        <div>
            <button onClick={() => {this.handleClick(-1)}}>⟵</button>
            <img src={this.state.img} alt=''/>
            <button onClick={() => {this.handleClick(1)}}>⟶</button>
        </div>
    );
}

}
export default Carousel;