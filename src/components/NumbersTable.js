import React from 'react'
import styled from 'styled-components'

class NumbersTable extends React.Component{

    render(){
        const Square = styled.span`
            width: 100px;
            height: 100px;
            padding: 20px;
            border: 1px solid black;
        `

        const list = []

        for (let i = 1; i <= this.props.limit; i++){
            if(i%2===0){
                list.push(<Square style={{backgroundColor: 'red'}}>{i}</Square>)
            }else{
                list.push(<Square style={{backgroundColor: 'white'}}>{i}</Square>)
            }
        }

        return (
            <div className="">
                {list}
            </div>
        )
    }
}

export default NumbersTable