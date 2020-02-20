import React from 'react';

const Box = props => {
    return (
        <div className = "BoxColor box">
            rgb(
                    {props.r},
                    {props.g},
                    {props.b})
                    <br></br>#ff0000
        </div>
    )
}

export default Box;