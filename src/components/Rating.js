// ★☆

import React from 'react';

const Rating = (props) => {
    return <div>
        <h2 style={{textAlign: 'center'}}>{'★'.repeat(Math.round(props.children)).padEnd(5,'☆')}</h2>
    </div>
}

export default Rating;