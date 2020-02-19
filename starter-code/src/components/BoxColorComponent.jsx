import React from 'react';

const BoxColorComponent = (props) => {
    const {r,g,b} = props;

    return (
        <div class="boxColor" style={{backgroundColor: `rgb(${r},${g},${b})`}}>
            <h1>rgb ({r}, {g}, {b})</h1>
        </div>
    )
}

export default BoxColorComponent;