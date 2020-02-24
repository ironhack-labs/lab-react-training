import React, { Component } from 'react';

class Random extends Component {
    render () {
        return (
            <div className=''>
                <p>Random value between 1 and 6 => {Math.floor(Math.random() * 6) + 1}</p>
                <p>Random value between 1 and 100 => {Math.floor(Math.random() * 100) + 1}</p>
            </div>
            
            //  Math.floor(Math.random() * 100);
            // Math.floor(Math.random() * 100);
    )}
}

export default Random;