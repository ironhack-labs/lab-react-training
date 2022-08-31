function Rating(props) {
    let stars
    const rating = Math.round(Number(props.children))
    console.log(rating)
    switch (rating.toString()){
        case '0' : 
        stars = '☆☆☆☆☆'
        break
        case '1' : 
        stars = '★☆☆☆☆'
        break
        case '2' : 
        stars = '★★☆☆☆'
        break
        case '3' : 
        stars = '★★★☆☆'
        break
        case '4' : 
        stars = '★★★★☆'
        break
        case '5' : 
        stars = '★★★★★'
        break
    }
    return (
        <div className="RatingDauphinois" >
            {stars}
        </div >
    )
}
export default Rating;
// ☆★