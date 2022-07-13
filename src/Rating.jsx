import './Rating.css'

function Rating({ children }) {
    let rating = Math.round(children)
    let stars = ""

    stars = rating === 1 ? '★☆☆☆☆' : undefined
    stars = rating === 2 ? '★★☆☆☆' : undefined
    stars = rating === 3 ? '★★★☆☆' : undefined
    stars = rating === 4 ? '★★★★☆' : undefined
    stars = rating === 5 ? '★★★★★' : undefined

    return (
        <div>
            <figure>{stars}</figure>
        </div>
    )
}

export default Rating