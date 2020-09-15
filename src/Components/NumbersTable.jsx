import React, { useState } from 'react'
import styled from "styled-components"

const StyledNumber = styled.div`
    display: flex;
    flex-wrap:wrap;
    div {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #000;
    }
`

const NumbersTable = (props) => {
    let numbers = []
    for (let i = 1; i <= props.limit; i++) {
        numbers.push(i)
    }

    return (
        <StyledNumber>
            {numbers.map((num, i) => {
                return <div style={{ backgroundColor: num % 2 === 0 ? "red" : "white" }}>{num}</div>
            })}
        </StyledNumber>
    )
}

export default NumbersTable