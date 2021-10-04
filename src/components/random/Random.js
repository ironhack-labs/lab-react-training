import React from 'react';

const Random = props => {

    function pickRandom(min, max){
        const random = Math.floor(Math.random() * (max - min) + min);
        return `Random value between ${min} and ${max} => ${random}`;
    }
    return (
        <div>
            <div>
                {pickRandom(props.min, props.max)}
            </div>
        </div>
    )
}

export default Random;