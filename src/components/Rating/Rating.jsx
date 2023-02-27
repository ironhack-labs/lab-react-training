
import "./Rating.css"
function Rating({ children }) {
    const emptyStar = '☆'
    const star = '★'
    const howManyStars = Math.round(children)
    const howManyEmptyStars = 5 - howManyStars
    const finalText = `${star.repeat(howManyStars)}${emptyStar.repeat(howManyEmptyStars)}`

    return (
        <div className="RatingContainer">
            <p>{finalText}</p>
        </div>
    );
}

export default Rating;