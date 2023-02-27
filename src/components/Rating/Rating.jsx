import './Rating.css'

const Rating = ({ children }) => {

    const roundedNum = Math.round(children)
    let stars

    if (roundedNum == 0) {
        stars = '✰✰✰✰✰'
    }
    else if (roundedNum == 1) {
        stars = '★✰✰✰✰'
    }
    else if (roundedNum == 2) {
        stars = '★★✰✰✰'
    }
    else if (roundedNum == 3) {
        stars = '★★★✰✰'
    }
    else if (roundedNum == 4) {
        stars = '★★★★✰'
    }
    else if (roundedNum == 5) {
        stars = '★★★★★'
    }

    return (
        <div className='Rating'>
            <p>{stars}</p>
        </div>
    )
}

export default Rating