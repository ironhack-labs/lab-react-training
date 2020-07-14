import React, { Component } from 'react'

export default class FacebookBtn extends Component {

    render() {
        return (
            <div>
                <button className="faceBtn" country={this.props.country} onClick={() => this.props.selectCountry(this.props.country)}>{this.props.text}</button>
            </div>
        )
    }
}


