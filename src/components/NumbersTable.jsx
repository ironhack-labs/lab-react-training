import React, { Component } from 'react';
import './../views/NumbersTable.css'

export class NumbersTable extends Component {

    render() {
        let numberArr = [];
        for(let i = 1; i <= this.props.limit; i++) {
            numberArr.push(i);
        }

        return (
            <div className="NumbersTable">
                {numberArr.map((number, index) => 
                    <div key={index}>
                        <p>{number}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default NumbersTable
