import React from 'react';
import '../assets/css/NumbersTable.css';
import uuid from 'react-uuid';

class NumbersTable extends React.Component {

    printNumber = () => {
        let newTable = []

        for (let number=1; number<=this.props.limit; number++) {
            if (number%2 !== 0) {
                newTable.push(<div className='Number'  key={uuid()} style={{backgroundColor: 'white'}}>{number}</div>)
            } else {
                newTable.push(<div className='Number'  key={uuid()} style={{backgroundColor: 'red'}}>{number}</div>)
            }
        }

        return newTable
    }

    render() {
        return ( 
            <div className='NumbersTable'>
                {this.printNumber()}
            </div>
        )
    }
}

export default NumbersTable;