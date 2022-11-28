import './Rating.css'

const Rating = props => {

    const { children } = props
    let rating = Math.round(children)

    let stars

    switch (rating) {
        case 1:
            stars = '★☆☆☆☆'
            break
        case 2:
            stars = '★★☆☆☆'
            break
        case 3:
            stars = '★★★☆☆'
            break
        case 4:
            stars = '★★★★☆'
            break
        case 5:
            stars = '★★★★★'
            break
        default:
            stars = '☆☆☆☆☆'
            break
    }

    return (
        
        <div className='stars'>
            <h1>{stars}</h1>
        </div>
    )
}

export default Rating