import React, { Component } from 'react';

class Random extends Component {
    render() {
        const {min,max} = this.props;
        return(
            <div className="">
                <p>Random Value between {min} and {max} => random num</p>
            </div>
        );
        }

    }

export default Random;