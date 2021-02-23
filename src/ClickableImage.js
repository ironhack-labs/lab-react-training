import React, { Component } from 'react'

export default class ClickableImage extends Component {

    state = {
        imgUrl: "/img/persons/maxence.png"
      }

    clickHandler = () => {
        this.setState((state, props) => ({
            imgUrl: state.imgUrl('/img/persons/maxence-glasses.png')
            }))
    }

    render() {
        return (
            <div>
                <img onClick={this.clickHandler} src={`{imgUrl}`} style={{height:'200px'}} alt="" />
            </div>
        )
    }
}
