import { useState } from "react";
import './NumbersTable.css'
function NumbersTable ({limit}) {
    let arr = Array.from({length: limit}, (_, index) => index + 1);
return (
    <div className="numbers-table">
        <div>
        {arr.map((el,index)=><p className={index % 2 === 0 ? "" : "red-background"} key={index}>{index + 1}</p>)}

        </div>
    </div>
)
}

export default NumbersTable