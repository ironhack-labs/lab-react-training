import React, { Component } from 'react'

export default class NumbersTable extends Component {
    
    state = {
        limit: this.props.limit,
    }

    render() {
        let content = []
        for (let i=0; i<this.state.limit; i++) {
            content.push(<div>{i+1}</div>)
        }

        return (
        <div className="NumbersTable card mb-3">
            <div className="row m-3">
                    {content.map((value, index) => {
                        if (index % 2 === 0) {
                            return <div className="numbersItem" key={index}>{value}</div>
                        } else {
                            return <div className="numbersItem" style={{ backgroundColor: 'red'}} key={index}>{value}</div>
                        }
                    })}
            </div>
        </div>
        )
    }
}