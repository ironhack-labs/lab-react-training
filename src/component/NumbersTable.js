import React from 'react'
import './NumbersTable.css'

function NumbersTable(props) {
        function draw() {
                const list = [];
                for (let i = 0; i < props.limit + 1; i++) {
                        list.push(<p key={i}>{i+1}</p>);
                }
                return list;
        }

        return (
                <div className="numTable">
                       {draw()}
                </div>
        )
}

export default NumbersTable
