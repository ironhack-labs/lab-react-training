import './Rating.css'

function Rating({children}) {
  
  function StarsRating(number) {
    if (number <= 0){
      return '☆☆☆☆☆'
    } else if (number <= 1.49){
      return '★☆☆☆☆'
    } else if (number <= 2.49){
      return '★★☆☆☆'
    } else if (number <= 3.49){
      return '★★★☆☆'
    } else if (number <= 4.49){
      return '★★★★☆'
    } else if (number >= 4.5){
      return '★★★★★'
    }
  }

  return (
    <div className='rating-start'>
      <span>{StarsRating(children)}</span>
    </div>
  )
}

export default Rating;