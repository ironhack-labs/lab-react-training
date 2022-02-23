import './Rating.css'

const Rating = (props) => {

    const { children } = props
    console.log(children)
    const rating = Math.round(children)
    let stars = ''

    if (rating === 0) {
        stars = '☆☆☆☆☆'
        return (<p className="stars">{stars}</p>)
    } else if (rating === 1) {
        stars = '★☆☆☆☆'
        return (<p className="stars">{stars}</p>)
    } else if (rating === 2) {
        stars = '★★☆☆☆'
        return (<p className="stars">{stars}</p>)
    } else if (rating === 3) {
        stars = '★★★☆☆'
        return (<p className="stars">{stars}</p>)
    } else if (rating === 4) {
        stars = '★★★★☆'
        return (<p className="stars">{stars}</p>)
    } else if (rating === 5) {
        stars = '★★★★★'
        return (<p className="stars">{stars}</p>)
    }

}

export default Rating