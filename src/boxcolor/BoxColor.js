import React from 'react';
import './BoxColor.css'

class BoxColor extends React.Component {
    render() {
        return (
            <div className="box-color" style={{ backgroundColor: 'rgb(' + this.props.r + ',' + this.props.g + ',' + this.props.b + ')' }}>
                rgb({this.props.r}, {this.props.g}, {this.props.b})
            </div>
        );
    }
}

export default BoxColor;