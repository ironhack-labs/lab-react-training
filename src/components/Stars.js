const Stars = ({value}) => {

    const stars = Math.round(value);
    let rating = '☆☆☆☆☆';

    if (stars === 1){
        rating ='★☆☆☆☆'
    } else if (stars === 2){
        rating = '★★☆☆☆'
    } else if (stars === 3){
        rating = '★★★☆☆'
    } else if (stars === 4){
        rating = '★★★★☆'
    } else if (stars === 5){
        rating = '★★★★★'
    }
    
  return (
    <h2> {rating} </h2>
  )
}

export default Stars