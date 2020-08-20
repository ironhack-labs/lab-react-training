import React, { Component } from 'react'

export default class SingleColorPicker extends Component {

    newValue = React.createRef()

    
  
    render() {
        return (
            <div style={{display: 'flex'}}>
                <div className="colorbox" style={this.boxStyle}></div> 

                {this.props.letter}<input ref={this.newValue} onChange={() => this.props.onChange(this.newValue, this.props.letter)} type="number" min="0" max="255"></input>
            </div>
        )
    }
}
