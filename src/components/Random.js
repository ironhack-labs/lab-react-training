import React, { Component } from 'react';

class Random extends Component {

    getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    render({min, max}=this.props) {

        const randomNumber = this.getRandomNumber(min, max);

        return (
            <div className='randomCont'>
                <p>Random value between {min} and {max} {'=>'} {randomNumber}</p>
            </div>
        )

    }

}

export default Random;