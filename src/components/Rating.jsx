const Rating = ({ children }) => {
    let ratArr = ""
    switch (Math.round(children)) {
        case 0:
            ratArr = "☆☆☆☆☆"
            break;
        case 1:
            ratArr = "★☆☆☆☆"
            break;
        case 2:
            ratArr = "★★☆☆☆"
            break;
        case 3:
            ratArr = "★★★☆☆"
            break;
        case 4:
            ratArr = "★★★★☆"
            break;
        case 5:
            ratArr = "★★★★★"
            break;

    }

    return (<div className="ratingg">{ratArr}</div>)
}

export default Rating