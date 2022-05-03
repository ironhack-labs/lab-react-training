import './Rating.css'

const Rating = ({ children }) => {
    const fullStars = Math.round(children)
    const emptyStars = 5 - fullStars
    let finalRat

    switch (fullStars) {
        case 0:
            finalRat = '☆☆☆☆☆'
            break;
        case 1:
            finalRat = '★☆☆☆☆'
            break;
        case 2:
            finalRat = '★★☆☆☆'
            break;
        case 3:
            finalRat = '★★★☆☆'
            break;
        case 4:
            finalRat = '★★★★☆'
            break;
        case 5:
            finalRat = '★★★★★'
            break;

    }


    return (
        <div>
            {finalRat}
        </div>
    )

}

export default Rating