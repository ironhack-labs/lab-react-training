import React from 'react';

function Rating({children}){
  let stars = Math.round(children)

  const ratingStar = {
    0: '☆☆☆☆☆',
    1: '★☆☆☆☆',
    2: '★★☆☆☆',
    3: '★★★☆☆',
    4: '★★★★☆',
    5: '★★★★★'
  }

  const ratingUser = ratingStar[stars]

return (
  <div className='margin'>{ratingUser}</div>
)
}

export default Rating


