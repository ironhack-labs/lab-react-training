import React from 'react';
import './NumbersTable.css';

const NumbersTable = (props) => {

    const loopingThisNumber = props => {
        let result= [];
        
        for(let i=1; i<=props.limit; i++){
            console.log(i)
            result.push(<div key={i} className="square" style={{backgroundColor: `${i % 2 === 0 ? 'red' : 'none'}`}}>{i}</div>);
        }
        return result;
    }

    

    return(
        <div className="numberstable">{loopingThisNumber(props)}</div>
    )
}

export default NumbersTable;

