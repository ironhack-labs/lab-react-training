import React from 'react';

const Random = (props) => {
let {min,max} = props;
let rnd = (min,max) => Math.floor(Math.random() * (max - min) + min)


let Rnd = rnd(min,max);
return(
<div className = 'Random'>
Random value between {min} and {max} => {Rnd}
</div>
)

};

export default Random;