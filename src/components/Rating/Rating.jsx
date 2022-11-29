import './Rating.css'

const Rating = props => {


    const { children } = props

    let childrenRounded = Math.round(children)

    let Star = '★'
    let emptyStar = '☆'

    const filledStars = Star.repeat(childrenRounded)
    const emptyStars = emptyStar.repeat(5 - childrenRounded)

    return (
        <div className='Rating'>
            {`${filledStars}${emptyStars}`}
        </div>
    )
}

export default Rating