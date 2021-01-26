import React, { Component } from 'react';
import './NumbersTable.css';

class NumbersTable extends Component {
    render() {
        const numbers = [];
        let number = 0;

        do {
            number++
            numbers.push(number);
        }
        while(numbers.length < this.props.limit)


        const listNumbers = numbers.map(number => {
            return number % 2 === 0 ? <li key={number} className='grid-item red'>{number}</li> : <li key={number} className='grid-item'>{number}</li> 
        })

        return (
            <div className='grid-container'>
                {listNumbers}
            </div>
        )
    }
}

export {NumbersTable};