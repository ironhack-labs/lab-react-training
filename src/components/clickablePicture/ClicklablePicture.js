import React from 'react';

const ClickablePicture = (props) => {
    return(
        <div> 
            <img 
                src={props.img}
                alt='manWithoutGlases'
            />
        </div>
    )
}

export default ClickablePicture;