const Rating = ({rate}) => {

    const roundedRating = Math.round((rate))
    const fullStars = '★'.repeat(roundedRating);
    const emptyStars = '☆'.repeat(5 - roundedRating);
    
    return (
    
    <div>
    
    {fullStars}{emptyStars}
    
    </div>
    )
    
    }
    
    export default Rating;