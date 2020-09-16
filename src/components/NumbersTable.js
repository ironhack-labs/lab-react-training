import React from 'react'

const NumbersTable = (props) => {

    let styleWhite = { backgroundColor : `white`}
    let styleRed = { backgroundColor : `red`}
    let arrayTable = [...Array(props.limit).keys()]

    return (
        <ul className="NumberTable">
            {arrayTable.map((elem, index) => {
                let style;
                if(index % 2 === 0)
                    style = styleWhite;
                else
                    style = styleRed;
                    
                return <li key={index} className= "NumberTableElement" style={style}>{index + 1}</li>
            })}
        </ul>
    )
}

export default NumbersTable
