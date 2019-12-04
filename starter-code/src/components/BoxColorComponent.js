import React from 'react';
import { BoxC } from '../styles/components';

function BoxColorComponent(props) {

    let boxStyle = {
        backgroundColor: `rgb(${props.r},${props.g}, ${props.b})`
    }
    return(
        <BoxC style={ boxStyle }>
            <p>rgb({props.r}, {props.g},{props.b})</p>
        </BoxC>
    );
}

export default BoxColorComponent;