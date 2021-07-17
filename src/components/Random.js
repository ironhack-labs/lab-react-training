import '../App.css';

const { Component } = require("react");


class Random extends Component {
    render() {
        const minNumber = this.props.min;
        const maxNumber = this.props.max;
        let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
        return (
            <div className="random">
                <p>Random value between {this.props.min} and {this.props.max} => {randomNumber}
                </p>
            </div>
        )
    }
}

export default Random;