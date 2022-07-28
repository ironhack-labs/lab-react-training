import {Rating} from '../Rating/Rating.js';


export const DriverCard = ({name,rating,img,car}) => {
console.log(car)



return (
<div>

<p> {name}</p>
<img src={img} height="70" alt="profilePic"/>
<Rating>{rating}</Rating>
<p>{car.model} and {car.licensePlate}</p>

</div>


)


}
