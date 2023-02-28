import { useState } from "react";
import "./NumbersTable.css";

function NumbersTable({ limit }) {
    const array = Array(limit).fill('')
    const style = {
        styleEven: {
            backgroundColor: 'white',
            color: 'black',
            height: '40px',
            width: '40px',
            border: 'solid 1px',
            margin: '0 5px'
        },
        styleOdd: {
            backgroundColor: 'red',
            color: 'white',
            height: '40px',
            width: '40px',
            border: 'solid 1px black',
            margin: '0 5px'

        }
    }
    return (
        <div className="NumbersTable">
            {
                array.map((elm, i) => {
                    return <p key={i} style={(i + 1) % 2 === 0 ? style.styleEven : style.styleOdd} >{i + 1}</p>
                })
            }
        </div>
    );
}

export default NumbersTable;
