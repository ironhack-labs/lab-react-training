
const Rating = (props) => {
  let stars = Math.round(props.children)

  if(stars === 0){stars = '☆☆☆☆☆'} 
  else if(stars === 1){stars = '★☆☆☆☆'} 
  else if(stars === 2){stars = '★★☆☆☆'} 
  else if(stars === 3){stars = '★★★☆☆'} 
  else if(stars === 4){stars = '★★★★☆'} 
  else if(stars === 5){stars = '★★★★★'}

  return ( 
    <div className="ratingContainer">
      <p> {stars} </p>
    </div>
  );
}
// ★☆
export default Rating;