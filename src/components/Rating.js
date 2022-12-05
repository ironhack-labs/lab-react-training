const Rating = (children) => {
    let argumentToNumber
    if ( typeof children.children === "string"){
        argumentToNumber = parseInt(children.children)
    }
    // console.log(argumentToNumber)
    let starsShown = Math.round(children.children)
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
        <div><p className="starRating" style={{"fontSize": "50px", "textAlign": "center"}}>{rating}</p></div>
        
        )
}
export default Rating