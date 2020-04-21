import React, {Component} from 'react'
import '../numbersTable/NumbersTable.css'

class NumbersTable extends Component {


  render(){
    const {limit} = this.props;
    let numOfTr, numOfTd = undefined;

    if(limit/5%0){
      numOfTr = limit/5
    } else {
      numOfTr = Math.round(limit/5)+1
      numOfTd = limit%5
    }
    // console.log(numOfTr)
    // console.log(numOfTd)

    return(
      <table className="numbersTable" >
        {/* {numOfTr && } */}
      </table>
    )
  }
}

export default NumbersTable