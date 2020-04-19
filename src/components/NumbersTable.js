import React, { Component } from 'react';
import './NumbersTable.css';

class NumbersTable extends Component {
    createArray = () => {
        let divs = [];
        let divClass = '';
        
        for (let i = 1; i <= this.props.limit; i++) {
            if(i % 2 === 0) {
                divClass = 'NumbersTable-div NumbersTable-div-even';
            } else {
                divClass = 'NumbersTable-div';
            }

            divs.push(<div key={i} className={divClass}>{i}</div>);
        }

        return divs;
    };

    render() {
        const divs = this.createArray();

        return (
            <div className='NumbersTable'>
                {divs}
            </div>
        );
    }
}

export default NumbersTable;