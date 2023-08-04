const Rating = ({rating}) => {
    const ratingStars = (rating) => {
        const ratingFloor = Math.round(rating)
        switch(ratingFloor){
            case 1: return <h1>★☆☆☆☆</h1>;
            case 2: return <h1>★★☆☆☆</h1>;
            case 3: return <h1>★★★☆☆</h1>;
            case 4: return <h1>★★★★☆</h1>;
            case 5: return <h1>★★★★★</h1>;
            default: return <h1>☆☆☆☆☆</h1>;
        }
    }
    return(
        <div className="rating">
            {
               ratingStars(rating)
            }
        </div>
    )

}

export default Rating;