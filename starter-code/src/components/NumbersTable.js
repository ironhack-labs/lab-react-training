import React, { Component } from 'react'

class NumbersTable extends Component {
    state = {
        i:1,
    }

    calcTable = () => { 
        let limitNumber = this.props.limit;
        let numberArr = new Array(limitNumber).fill().map((x,i)=> {
            return  i % 2 ? <li className="rojo" key={i}>{i + 1}</li> : <li key={i}>{i + 1}</li>
          })
          return numberArr;
    }

    render() {
        return (
             <ul className="NumbersTable">
                 {this.calcTable()}
             </ul>
        ) 
    }
}

export default NumbersTable;