const Rating = (props) => {
  const { children, scoreToStars } = props
  let stars = scoreToStars(children)
  
  return (
    <div className='Rating'>
      {stars}
    </div>
  )
}

export default Rating