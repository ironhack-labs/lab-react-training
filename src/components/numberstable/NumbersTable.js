import React, { Component } from 'react'
import './NumbersTable.css'

export default class NumbersTable extends Component {



   createArray = () => {
       let numbersArr = []
       for( let i = 0 ; i < this.props.limit; i++) {
            numbersArr[i] = i+1
       }
       return numbersArr
   }

    render() {
       const tableArr = this.createArray()
      
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                        {tableArr.map(number =>  
                             <td 
                                className='table-cell' 
                                style={{ backgroundColor: number % 2 === 0 && 'red' }}  
                                >{number}</td>
                        )} 
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
