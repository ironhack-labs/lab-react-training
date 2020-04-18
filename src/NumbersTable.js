import React from 'react';

const NumbersTable = props => {

    let tableNums = []

    const renderTable = (limit) => {
        for (let i = 1; i < limit + 1; i++) {
            tableNums.push(<div>{i}</div>)
        }

        return tableNums
    }

    return (
        <div className="flex-wrap">
            { renderTable(props.limit) }
        </div>
    )
}

export default NumbersTable;