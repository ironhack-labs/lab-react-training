import './Rating.css'

const Rating = ({ children }) => {
    const rounded = Math.floor(children)

    let stars = ''

    switch (rounded) {
        case 1:
            stars = '★☆☆☆☆'
            break;
        case 2:
            stars = '★★☆☆☆'
            break;
        case 3:
            stars = '★★★☆☆'
            break;
        case 4:
            stars = '★★★★☆'
            break;
        case 5:
            stars = '★★★★★'
            break;



    }

    return (<div className='rating'>{stars}</div>)
}

export default Rating