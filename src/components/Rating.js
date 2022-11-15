const Rating = (props) => {
    const numOfStars = Math.round(props.children);
    const emptyStar = '☆';
    const filledStar = '★';
    const rating = filledStar.repeat(numOfStars) + emptyStar.repeat(5 - numOfStars);
  
    return (
        <div>
            {rating}
        </div>
    )
}

export default Rating