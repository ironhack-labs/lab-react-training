const Rating = (children) => {
    let starsShown = Math.round(children)
    let rating
    switch (starsShown){
        case 0:
            rating = "☆☆☆☆☆"
            break;
        case 1:
            rating = "★☆☆☆☆"
            break;
        case 2:
            rating = "★★☆☆☆"
            break; 
        case 3:
            rating = "★★★☆☆"
            break; 
        case 4:
            rating = "★★★★☆"
            break;
        case 5:
            rating = "★★★★★"
            break;
        default:
            rating = "Rating System Error"
    };
    
    return  (
        <div><p className="starRating" style={{"font-size": 50, "text-align": "left"}}>{rating}</p></div>
    )
}
export default Rating