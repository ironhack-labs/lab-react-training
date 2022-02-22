import React from "react";
import './NumbersTable.css';

function NumbersTable({ limit }) {
    const tableArr = Array.from(Array(limit)).map((elem, idx) => idx + 1)
    return (
            <>
            <div className="NumberTable">
                {tableArr.map((elem, idx))}
                </div>
            </>
            )
//y ahora ¿como pinto la cuadricula?? oh dios 
    }

            export default NumbersTable