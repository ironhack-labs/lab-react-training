import React from 'react';

const DriverCard = (props) => {
let {name,rating,img,car} = props;

let rate =(n)=>
n <= 0 ? '☆ ☆ ☆ ☆ ☆'
:n >0 && n <1.5 ? '★ ☆ ☆ ☆ ☆ ' 
: n >= 1.5 && n < 2.5 ? '★ ★ ☆ ☆ ☆ '
: n >= 2.5 && n < 3.5 ? '★ ★ ★ ☆ ☆ '
: n >= 3.5 && n < 4.5 ? '★ ★ ★ ★  ☆'
: '★ ★ ★ ★ ★ '

let Rating = rate(rating);


return(
<div className = 'DriverCard'>
 <div className ='DriverPhoto'>
     <img src ={img}/>
 </div>
 <div>
<p>{name}</p>
<p>{Rating}</p>
<p>{car.model}
 - {car.licensePlate}</p>
 </div>
</div>
)

};

export default DriverCard;