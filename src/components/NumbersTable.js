import React, { Component } from 'react'

class Field extends Component {
  render(){
    return (
      <div style={{
        backgroundColor: this.props.color,
        width: '50px',
        height: '50px',
        display: 'flex',
        border: '1px solid black',
        alignItems: 'center',
        justifyContent: 'center'
      }}>{this.props.children}</div>
    );
  }
}


export default class NumbersTable extends Component {

  printTable = () => {
    const fields = []
    for (let i = 1; i <= this.props.limit; i++) {
      let color = 'white'
      if (i%2 !== 0) color = 'red'
      fields.push(<Field key={i} color={color}>{i}</Field>)
    }
    return <div style={{display: 'flex', flexWrap: 'wrap'}}>{fields}</div>
  }

  render() {
    return (
      <div>
        {this.printTable()}
      </div>
    )
  }
}
