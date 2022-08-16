
function Rating(props) {
    const {rating} = props;
    const rounded = Math.ceil(rating);
  let stars = [];
  for(let i= 0; i < 5; i++) {
    if(i < rounded){
        stars.push('★')
    } else{
        stars.push('☆')
    }
  }
  return (
    <div>
    <p>{stars}</p>
    </div>
  );
  }

export default Rating