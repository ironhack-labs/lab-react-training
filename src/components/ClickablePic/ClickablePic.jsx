import React, { Component } from 'react'

class ClickablePic extends Component {
    state = {
        src: this.props.img
    }

    changeImg = () => {
        const { img, imgClicked } = this.props
        this.setState((prevState) => {
            const newSrc = prevState.src === img ? imgClicked : img
            return {
              src: newSrc
            }
        })
    }

    render() {
        return(
            <div>
                <img src={this.state.src} onClick={this.changeImg} alt="" width="100px"/>
            </div>
        )
    }
}

export default ClickablePic