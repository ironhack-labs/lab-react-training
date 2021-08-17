import React, {Component} from 'react';

class Random extends Component {

    getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    render() {
        return <div className="random">
            <h2>Random value between {this.props.min} and {this.props.max} =&gt; {this.getRandomValue(this.props.min, this.props.max)}</h2>
        </div>
    }
}

export default Random;