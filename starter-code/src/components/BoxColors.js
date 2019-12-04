import React from 'react';
import { BoxColor } from '../styles/components';

function BoxColorComponent (props) {
    const color = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }
    return (
        <div>
            <BoxColor style = { color }>
                <p>rgb({props.r},{props.g}, {props.b})</p>
            </BoxColor>
        </div>
    )
}

export default BoxColorComponent;