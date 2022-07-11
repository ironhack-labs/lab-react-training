import './Rating.css'

function Rating({ children }) {
    let rating = Math.round(children)
    let stars = ""

    rating === 1 ? stars = '★☆☆☆☆' : undefined
    rating === 2 ? stars = '★★☆☆☆' : undefined
    rating === 3 ? stars = '★★★☆☆' : undefined
    rating === 4 ? stars = '★★★★☆' : undefined
    rating === 5 ? stars = '★★★★★' : undefined

    return (
        <div>
            <figure>{stars}</figure>
        </div>
    )
}

export default Rating