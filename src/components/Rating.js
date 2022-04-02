function Rating(props){
    const ratingNumber = Math.round(props.children)
    const stars = '★'.repeat(ratingNumber) + '✩'.repeat(5-ratingNumber);
    return(
        <div className="Rating"> 
          {stars}
        </div>

    )
}

export default Rating