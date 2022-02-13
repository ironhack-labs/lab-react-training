
import './RatingStyle.css';

const Rating = (props) => {
    const stars = Math.round(props.children)

    const drawStars = '★'.repeat(stars) + '☆'.repeat(5 - stars)

    // console.log("draw", props)

    return(
        <div className='Rating'>
            <p>{drawStars}</p>
        </div>
    )
};

export default Rating;