import React from 'react';

export default function BoxColor(props){
    const boxColor = {
        
    }

    return(
        <div className='BoxColor'>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}