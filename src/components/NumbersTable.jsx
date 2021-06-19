import React, { Component } from 'react'

class NumbersTable extends Component {
    state = {
        cells:[]
    }

    renderTable = (limit=0) => {
        let {cells} = this.state;

        for(let i=0; i<limit; i++) {
            cells.push(i+1);
        }

        return (
            <div className="numbersTable">
                {cells.map((item,index_cells) => (
                    <div className="number" style={{backgroundColor: index_cells % 2 === 0 ? 'red' : 'white'}}>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        );
    }

    render({limit}=this.props) {
        return(
            this.renderTable(limit)
        )
    }
}

export default NumbersTable;