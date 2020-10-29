import React from 'react';

const handleRate = (rate) => {
   return rate < 0.6 ? '☆☆☆☆☆'
   : rate < 1.6 ?  '★☆☆☆☆'
   : rate < 2.6 ? '★★☆☆☆'
   : rate < 3.6 ? '★★★☆☆'
   : rate < 4.6 ? '★★★★☆'
   : rate <= 5 ? '★★★★★' : false;
}

const Rating = ({children}) => <h1 style={{fontSize: 50, letterSpacing: 8}}>{handleRate(children)}</h1>;

export default Rating;