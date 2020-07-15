import React, { Component } from 'react'

export default class NumbersTable extends Component {
    tableList() {
        let list = [];
        for(let i = 1; i<=this.props.limit; i++){
            let style = {
                backgroundColor: i % 2 ? 'red': 'white'
            }
            list.push(<li className="table" style={style} key={i}>{i}</li>)
        }
        return list
    }

    render() {
        return (
            <div>
                <ul className="tableUl">{this.tableList()}</ul>
            </div>
        )
    }
}



