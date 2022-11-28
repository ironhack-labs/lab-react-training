import './Rating.css'

function Rating(props) {
    const newRating = Math.round(props.children);
    return (
        <div class="ratingStars">
            <p>{'★'.repeat(newRating) + '☆'.repeat(5 - newRating)}</p>
        </div>
    );

}
export default Rating