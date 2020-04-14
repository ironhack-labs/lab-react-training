import React, { Component } from 'react';

class Box extends Component {


    rgb = [this.props.r, this.props.g, this.props.b]

    style = {
        backgroundColor: `rgb(${this.rgb})`
    }


    render() {

        return (
            <div style={this.style} className="gree">

                <span > {this.props.r} + {this.props.g} {this.props.b} </span>

            </div>
        );

    }
}
export default Box;
