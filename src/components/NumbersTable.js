import React from 'react';
import styled from 'styled-components';

class NumbersTable extends React.Component {
    render() {

        const OddDiv = styled.div`
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content:center;
        width: 70px;
        height:70px;
        text-align:center;
        border: solid black 2px;
        background-color: red;
        `
        const EvenDiv = styled.div`
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content:center;
        width: 70px;
        height:70px;
        text-align:center;
        border: solid black 2px;
        background-color: white;
        `
        const list = []

        for (let i = 1; i < this.props.limit +1;i++){
        console.log(i)
        if (i%2 === 0){list.push(<EvenDiv key={i}>{i}</EvenDiv>)}else{list.push(<OddDiv>{i}</OddDiv>)}
        }
      
    
    return (
      <div className="numberTableDiv">
        {list}
      </div>
    );
  }
}

export default NumbersTable;
