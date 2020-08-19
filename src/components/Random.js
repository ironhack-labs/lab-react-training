import React from 'react';
import './Random.css'


//iteration 3: we need to get a random value like in the ironcontacts lab, for that you need math floor and math random then we return props with the minimum and maximum equal to our randomValue

const Random = (props) => {

    const randomValue = Math.floor(Math.random() * props.max + props.min);
        return (
            <h3>
              Random value between {props.min} and {props.max} = {randomValue}
            </h3>
 );
};

export default Random;