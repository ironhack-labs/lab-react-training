import React, {Component} from 'react';
import'./Carousel.css';


 class Carousel extends Component {
    state = {
        index: 0
    }
     
    handleClickRight  = () => {
        if (this.state.index < 3) {
            this.setState({ index: this.state.index + 1})
        } else if (this.state.index === 3){
            this.setState({index: 0})
        }
    }
    handleClickLeft  = () => {
        if (this.state.index > 0) {
            this.setState({index: this.state.index - 1})
        } if (this.state.index === 0){
            this.setState({index: 3})
        }
    }
    render() {
        return (
            <div className="Carousel">
             <img src={this.props.imgs[this.state.index]} alt="person"/>
             <div>
                <button onClick={ this.handleClickLeft }>Previous</button>
                <button onClick={ this.handleClickRight }>Next</button>
                </div>
            </div>
        )
    }
   }
   export default Carousel;
