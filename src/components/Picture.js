import React, { Component } from 'react'

class Image extends Component {

    state = {
        actual: this.props.img,

    }
    val = 0;


    changeImg = () => {
        if (this.val === 0) {
            this.setState({
                actual: '/img/persons/maxence-glasses.png'
            })
            this.val = 1;
            console.log(this.val)
        } else

            if (this.val === 1) {
                this.setState({
                    actual: '/img/persons/maxence.png'
                })
                this.val = 0;
                console.log(this.val)

            }


    }
    render() {

        return (
            <div className="container">

                <img alt="img" onClick={this.changeImg} src={this.state.actual}>

                </img>
            </div>
        )
    }
}

export default Image;