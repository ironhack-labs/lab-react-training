import React, { Component } from 'react';

class BoxColor extends Component{
    render() {
        const {r,g,b} = this.props;
        return (
            <div class="box" style={{"background-color": `rgb(${r},${g},${b})`}}>
                <p>rgb({r},{g},{b})</p>
                <p>#</p>
            </div>
        );
    }
}

export default BoxColor;