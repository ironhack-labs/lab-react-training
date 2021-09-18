import React, {Component} from 'react';
import './BoxColor.css';

class BoxColor extends Component {
    render () {
        const boxStyle = {backgroundColor: `rgb(${this.props.r},${this.props.g},${this.props.b})`}
        return (
            <div className="box-color" style={boxStyle}>
                <p>rgb({this.props.r},{this.props.g},{this.props.b})</p>
            </div>
        )
    }
}

export default BoxColor;