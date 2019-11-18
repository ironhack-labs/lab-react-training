import React from 'react';
import './box-color.css';
class BoxColor extends React.Component {
    render() {
        let boxStyle = {backgroundColor: `rgb(${this.props.r},${this.props.g},${this.props.b})`};
        return (
<div className="box" style={boxStyle}>

</div>
        );
    }
}
export default BoxColor;