import React from "react"
import '../components/Carousel.css'

class Carousel extends React.Component {

    state = {
        img: 0
    }

    nextImg = () => {

        let { img } = this.state;

        if (img < 3) {
            img++
        } else {
            img = 0
        }

        this.setState({img})
    }

    prevImg = () => {
        let { img } = this.state;

        if (!img < 1) {
            img--
        } else {
            img = 3
        }

        this.setState({img})
    }

    render () {
        return (
            <div className="carouselContainer">
                <button onClick={this.prevImg}>←</button>

                <div>
                    <img src={this.props.imgs[this.state.img]} />
                </div>

                <button onClick={this.nextImg}>→</button>
            </div>
        )
    }
}

export default Carousel