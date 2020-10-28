import React from 'react';

const handleRate = (rate) => {
   return rate < 1 ? '☆☆☆☆☆'
   : rate < 2 ?  '★☆☆☆☆'
   : rate < 3 ? '★★☆☆☆'
   : rate < 4 ? '★★★☆☆'
   : rate < 5 ? '★★★★☆'
   : rate <= 5 ? '★★★★★' : false;
}

const Rating = ({children}) => <h1 style={{fontSize: 80, letterSpacing: 15}}>{handleRate(children)}</h1>;

export default Rating;