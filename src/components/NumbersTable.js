import React from 'react'

class NumbersTable extends React.Component{

    getNumbers(limit){
        const numArray = []
        const style1 = {width: '20px', border: '1px solid black', padding: '20px', backgroundColor: 'red'}
        const style2 = {width: '20px', border: '1px solid black', padding: '20px', backgroundColor: 'white'}
        for (let i=1; i<limit+1; i++){
            if (i%2 === 0){
                numArray.push(<div style={style1}>{i}</div>)
            } else {
                numArray.push(<div style={style2}>{i}</div>)
            }
        }
        return numArray
    }

    render(){
        return(
            <div className="numbersTable">
                {this.getNumbers(this.props.limit)}
            </div>
        )
    }
}

export default NumbersTable
