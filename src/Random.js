import React from 'react';
import PropTypes from 'prop-types';



// PROPS IS AN OBJECTS
function Random({ min, max }) {
    // eslint-disable-next-line react/prop-types
    let random = Math.floor(Math.random()* (max-min +1) +min)

    return (
        <>

            <div>
                <p>{`Random value between ${min} and ${max} => ${random}`}</p>
            </div>
        </>
    )
}


//this is very good practise - senior level
//propTypes lowercase and then uppercase
Random.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
}


export default Random;