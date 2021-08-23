function Rating(props){
  const stars = [1, 2, 3, 4, 5]
  return(
    <div>
      {stars.map(star => (
        <i 
          style={{ color: star <= Math.round(props.children) ? 'yellow' : 'grey' }}
          className="fa fa-star" 
          aria-hidden="true"
          ></i>
      ))}
    </div>
  )
}

export  default Rating