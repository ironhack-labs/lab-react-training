function Rating(props) {
    const {children} = props

    const roundRating = (rating) => {
        switch(Math.round(rating)) {
            case 1:
                return '★☆☆☆☆'
                break;
            case 2:
                return '★★☆☆☆';
                break;
            case 3:
                return '★★★☆☆';
                break;
            case 4:
                return '★★★★☆';
                break;
            case 5:
                return '★★★★★';
                break;
            default: 
                return '☆☆☆☆☆'
                break;
        }
         
    }

    return (
        <div>
            <p>{roundRating(children)}</p>
        </div>
    )



    /* const roundRating = Math.round(children)

    switch(roundRating) {
        case 1:
            return '★☆☆☆☆'
            break;
        case 2:
            return '★★☆☆☆';
            break;
        case 3:
            return '★★★☆☆';
            break;
        case 4:
            return '★★★★☆';
            break;
        case 5:
            return '★★★★★';
            break;
        default: 
            return '☆☆☆☆☆'
            break;

    } */
}

export default Rating