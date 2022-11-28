import './Rating.css'

const Rating = props => {


    const { children } = props

    let childrenRounded = Math.round(children)

    let stars

    if (childrenRounded === 0) {
        return stars = '☆'
    } else {
        stars = '★'
        return stars.repeat(childrenRounded)
    }



    return (
        <div className='Rating'>

        </div>
    )
}

export default Rating