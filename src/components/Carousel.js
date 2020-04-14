import React, { Component } from 'react'


class Carousel extends Component {

    state = {
        actual: 0,
        img: this.props.imgs[0]

    }

    right = () => {

        // if (this.state.actual === 3) {

        //     this.setState({ actual: this.state.actual + 1 })

        //     this.setState({ img: this.props.imgs[this.state.actual] })


        //     this.setState({ actual: 0 })
        //     console.log(this.state.actual)



        // } else {
        if (this.state.actual < 3) {


            this.setState({ actual: this.state.actual += 1 })

            this.setState({ img: this.props.imgs[this.state.actual] })
            console.log(this.state.actual)

        } else {


        }



    }
    left = () => {

        if (this.state.actual > 0) {

            this.setState({ actual: this.state.actual -= 1 })

            this.setState({ img: this.props.imgs[this.state.actual] })
            console.log(this.state.actual)

        }




    }
    render() {

        return (
            <div className="container">

                <img alt="one" src={this.state.img}>
                </img>
                <button onClick={this.left}>Left</button><button onClick={this.right}>Right</button>
            </div>

        )
    }
}

export default Carousel