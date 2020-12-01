import React, { Component } from 'react';

class BoxColor extends Component {
    render({r,g,b} = this.props) {
        return (
            <div style={{backgroundColor: `rgb(${r},${g},${b})`}}>
                rgb({r},{g},{b})
            </div>
        );
    }
}

export default BoxColor;