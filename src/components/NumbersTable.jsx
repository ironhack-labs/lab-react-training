import React from 'react'
import NumberBox from './NumberBox';

export default function NumbersTable({limit}) {

    const table = () => {
        let elements = [];
        let numberOfElements = elements.length;

        const renderBox = (num) => {
            const bGColor = {
                backgroundColor: num % 2 === 0 ? 'red' : 'none'
            }
            elements.push(<NumberBox number={num} style={bGColor} key={num}/>)
        };

        while (numberOfElements < limit) {
            numberOfElements++
            elements.push(renderBox(numberOfElements));
        }

        return elements;
    }

    return (
        <div className="numbers-table">
            <div className="nt-content">
                {table()}
            </div>
        </div>
    )
}
