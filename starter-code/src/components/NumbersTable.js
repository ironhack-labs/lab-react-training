import React, { Component } from 'react'

class NumbersTable extends Component {
    state = {
        limit:1,
        table:""
    }

    calcTable = () => { 
        for (let i=1; i<=this.props.limit; i++) {
           
            this.setState({table: "<td>"+{i}+"</td>"})
        }
        
    }


    render() {
        this.calcTable();
        return (
            <div className="NumbersTable">
                {
                    <table>

                        {this.state.table}
                    </table>
                }
            </div>
        )
    }
}

export default NumbersTable;