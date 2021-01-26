import React from "react"
import '../components/Carousel.css'

class Carousel extends React.Component {

    state={
        img : 0,
    }

    rightImg = () => {

        let { img } = this.state;

        if (this.img < 3) {
            this.img++
        } else {
            this.img = 0
        }

        this.setState = ({
            img,
        })
    }

    leftImg = () => {

        let { img } = this.state;

        if (!this.img<1) {
            this.img--
        } else {
            this.img=3
        }

        this.setState = ({
            img,
        })

    }

    render () {

    
        return (
            <div>
                <button onClick={this.rightImg}>←</button>

                <div>
                    <img src={this.props.imgs[this.state.img]} />
                </div>

                <button onClick={this.leftImg}>→</button>
            </div>
        )
    }

}




export default Carousel