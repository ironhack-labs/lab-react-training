import React, { Component } from 'react'
import './styles.css'

export class Greetings extends Component {
    render() {
        return (
            <div>
             <div className="box">
                {this.props.lang} {this.props.children}
                </div>
            </div>
        )
    }
}

export default Greetings
