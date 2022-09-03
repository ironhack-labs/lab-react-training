import './Rating.css';

function Rating ({ children }) {
    let newRating = '★'.repeat(Math.round(children)).padEnd(5, '☆');

    return(
        <div className="star-container">
            <span>{newRating}</span>
        </div>

    );
}

export default Rating