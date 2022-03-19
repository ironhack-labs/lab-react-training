import React, { Component } from "react";

class Random extends Component {

    getRandom = (max, min) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    render() {
        return(
            <div>
                {`Random value between ${this.props.min} and ${this.props.max} => ${this.getRandom(this.props.max, this.props.min)}`}
            </div>
        )
    }
}

export default Random