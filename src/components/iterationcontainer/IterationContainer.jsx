import React from 'react';

import './IterationContainer.css';

function IterationContainer(props) {
    const {title,children}=props;
    return (
        <div className= "iteration-container">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default IterationContainer
