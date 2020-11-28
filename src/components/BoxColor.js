import React, { Component } from 'react';

class BoxColor extends Component {

    componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    
    rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    render({r, g, b}=this.props) {

        const divStyle = {backgroundColor: `rgb(${r}, ${g}, ${b})`}

        const hex = this.rgbToHex(r, g, b);

        return (
            <div className='randomCont' style={divStyle}>
                <p>rgb({r}, {g}, {b})</p>
                <p>{hex}</p>
            </div>
        )

    }

}

export default BoxColor;