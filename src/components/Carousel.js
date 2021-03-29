import React from 'react';
import '../assets/css/Carousel.css'

class Carousel extends React.Component {
    state = {
        idx: 0,
    }    

    moveCarousel = (direction) => {
        
        if (direction === 'left') {
            this.setState({
                idx: (this.state.idx - 1) % this.props.imgs.length
            })
        } else {
            this.setState({
                idx: (this.state.idx + 1) % this.props.imgs.length
            })
        }
        console.log(Math.abs(this.state.idx))
    }

    render(){
        return(
            <div className='Carousel'>
                <div className='LeftArrow' onClick={() => this.moveCarousel('left')}>
                    <b> &#8592; </b>
                </div>
                <img src={this.props.imgs[this.state.idx]} alt='random-image'/>
                <div className='RightArrow' onClick={() => this.moveCarousel('right')} >
                    <b> &#8594; </b>
                </div>
            </div>
        )
    }
}

export default Carousel;