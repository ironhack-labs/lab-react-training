

const Rating = ({ children }) => {

    let rating = Math.round(children)

    let result = '';

    switch (rating) {
        case 0:
            result = '☆☆☆☆☆'
            break;
        case 1:
            result = '★☆☆☆☆'
            break;
        case 2:
            result = '★★☆☆☆'
            break;
        case 3:
            result = '★★★☆☆'
            break;
        case 4:
            result = '★★★★☆'
            break;
        case 5:
            result = '★★★★★'
            break
        default:

    }
    return (

        <div className="rating">
            {/* <p>{rating}</p> */}
            <p>{result}</p>
        </div>
    )
}

export default Rating 