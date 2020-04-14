import React, { Component } from 'react';

class Gree extends Component {
    render() {
        return (
            <div className="gree">

                <span> {this.props.lang}</span>

            </div>
        );
    }
}
export default Gree;
