import React, { Component } from 'react'

export default class BoxColor extends Component {
    render() {
        let {r,g,b} = this.props
        return (
            <div className="BoxColor box" style={{backgroundColor: `rgb(${r},${g},${b})`}}>
                <p>rgb({r},{g},{b})</p>
              </div>
        )
    }
}
