import React, { Component } from 'react';

class Random extends Component {
    render({min, max} = this.props) {
        let randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min
        return (
            <div className="border">
                {`Random number between ${min} and ${max} => ${randomNumber}`}
            </div>
        );
    }
}

export default Random;