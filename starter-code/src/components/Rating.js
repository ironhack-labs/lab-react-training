import React from 'react';

const Rating = (props) => {
let {children} = props;

let rate =(n)=>
n <= 0 ? '☆ ☆ ☆ ☆ ☆'
:n >0 && n <1.5 ? '★ ☆ ☆ ☆ ☆ ' 
: n >= 1.5 && n < 2.5 ? '★ ★ ☆ ☆ ☆ '
: n >= 2.5 && n < 3.5 ? '★ ★ ★ ☆ ☆ '
: n >= 3.5 && n < 4.5 ? '★ ★ ★ ★  ☆'
: '★ ★ ★ ★ ★ '

let rating = rate(children);
return(
<div className = 'Rating'>
<b>  {rating} </b>
</div>
)

};

export default Rating;