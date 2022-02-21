const Rating = (props) => {

    const { children } = props
  
    let rating = Math.round(children)
    let stars = ''

    if (rating === 0) {
        stars = '☆☆☆☆☆'
        return <p>{stars}</p>
    } else if (rating === 1) {
        stars = '★☆☆☆☆'
        return <p>{stars}</p>
    } else if (rating === 2) {
        stars = '★★☆☆☆'
        return <p>{stars}</p>
    } else if (rating === 3) {
        stars = '★★★☆☆'
        return <p>{stars}</p>
    } else if (rating === 4) {
        stars = '★★★★☆'
        return <p>{stars}</p>
    } else if (rating === 5) {
        stars = '★★★★★'
        return <p>{stars}</p>
    }

}

export default Rating