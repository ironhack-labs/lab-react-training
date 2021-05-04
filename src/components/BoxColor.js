import React from 'react';

const BoxColor = ({ r, g, b }) => {
    const hexBg = '#' + ('0'+r.toString(16)).slice(-2) + ('0'+g.toString(16)).slice(-2) + ('0'+b.toString(16)).slice(-2);
    const hexText = r*0.299 + g*0.587 + b*0.114 > 186 ? '#000000' : '#ffffff';

    const style = {
        backgroundColor: hexBg,
        color: hexText,
    }

    return (
        <div style={style}>
            <h4>{'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')'}</h4>
            <h4>{hexBg}</h4>
        </div>
    );
}

export default BoxColor;