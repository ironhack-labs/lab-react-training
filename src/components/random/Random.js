import React from 'react';

function Random (props) {
    const less = Math.floor(Math.random() * 7)
    const more = Math.floor(Math.random() * 100)

    if(props.max <= 6)
        return (
            <div className='Random'>
                {props.children} {less}
            </div>
        )

    if(props.max <= 100)
        return (
            <div className='Random'>
            {props.children} {more}
        </div>
        )
}

export default Random

        // <div className="Random">
        //    {props.children} {(props.max <=6)} ? {less} : {more} 
        // </div>