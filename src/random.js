import React, { Component } from 'react';

class rnd extends Component {
    random(cuanto) {

        let ale = Math.random(Math.round(0)) * cuanto

        this.state = { number: ale.toFixed(0) }

    }
    render() {
        this.random(6)
        return (
            <div className="gree">

                <span> {this.props.rnd}  {this.state.number} </span>

            </div>
        );
    }
}
export default rnd;
