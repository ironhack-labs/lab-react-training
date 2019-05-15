import React from 'react';

const Carousel = (props) => {
let {imgs, n, next, prev} = props;
 
let image = imgs[n];


return(
<div className = 'Carousel'>
<img height = '100px' width='100px' src = {image}/>
<p></p>
<button onClick={prev}>Previous</button>
<button onClick={next}>Next</button>
</div>
)

};

export default Carousel;