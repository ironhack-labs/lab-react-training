import React from 'react';
import "./NumbersTable.css";

export default class NumbersTable extends React.Component {
    render() {
        let numbers = [];
        for (let i = 1; i <= this.props.limit; i ++) {
            numbers.push(i)
        }
            return (
                <table className='NumbersTable'>
                    <tbody>
                        <tr>
                            {numbers.map((item, index) => (
                                item % 2 === 0 ? <td key={index} className='evenNumber number'>{item}</td> : <td key={index} className='oddNumber number'>{item}</td>
                                )
                            )} 
                        </tr>
                    </tbody>
                </table>
            )
    }
}