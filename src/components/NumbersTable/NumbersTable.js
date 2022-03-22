import React, { Component } from 'react'

import './NumbersTable.css'

class NumbersTable extends Component {
    state = {
        numbers: [],
    }

    componentDidMount(){
        this.displayNumbers()
    }

     displayNumbers(){
        const numArr = []
        for(let i = 1; i <= this.props.limit; i++){
            numArr.push(i)
        }
        this.setState({
            numbers: numArr
        })
    } 

    render(){
        return(
            <div className='NumbersTable'>
            {this.state.numbers.map((number, index) => {
               return (
                    <div key={index} className='NumbersTable-row' style={{backgroundColor: (index + 1) % 2 === 0 ? "red" : "white"}} >
                        <p>{number} {this.state.color}</p>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default NumbersTable