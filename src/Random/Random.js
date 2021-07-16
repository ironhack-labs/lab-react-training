import React, { Component } from 'react';
import './Random.css';

class Random extends Component{
    render(){
        return(
            <>
                <div id = 'container-random'>
                    <div>
                        <p>Random value between {this.props.min} and {this.props.max} => {
                            Math.floor(Math.random() * (this.props.max - this.props.min) + this.props.min)
                        }</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Random