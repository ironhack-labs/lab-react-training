import { Component } from "react";
import '../App.css';

class NumbersTable extends Component {
    render() {
        let numberList = [];
        for (let i = 1; i <= this.props.limit; i += 1) {
            numberList.push(i)
        }
        return (
            <table className='number-table'>
                <tbody>
                    <tr>
                        {numberList.map((item, index) => (
                            item % 2 === 0 ? <td key={index} className='even-number number'>{item}</td> : <td key={index} className='number'>{item}</td>
                            )
                        )} 
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default NumbersTable;