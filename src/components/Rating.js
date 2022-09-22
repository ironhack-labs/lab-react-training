const Rating = (props) => {
    const {children}=props
    const Round = Math.round(children)
  return (
    <div className="starsRating">
        {Round === 0 && <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Star_rating_0_of_5.png"/>}
        {Round === 1 && <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Star_rating_1_of_5.png"/>}  
        {Round === 2 && <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Star_rating_2_of_5.png"/>} 
        {Round === 3 && <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Star_rating_3_of_5.png"/>} 
        {Round === 4 && <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png"/>} 
        {Round === 5 && <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png"/>} 
    </div>
  )
}

export default Rating