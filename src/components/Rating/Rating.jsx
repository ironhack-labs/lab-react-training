import './Rating.css';

const Rating = ({ children }) => {
    let ratingString;

    switch (true) {
        case children >= 0 && children < 0.5:
            ratingString = '☆☆☆☆☆';
            break;
        case children >= 0.5 && children < 1.5:
            ratingString = '★☆☆☆☆';
            break;
        case children >= 1.5 && children < 2.5:
            ratingString = '★★☆☆☆';
            break;
        case children >= 2.5 && children < 3.5:
            ratingString = '★★★☆☆';
            break;
        case children >= 3.5 && children < 4.5:
            ratingString = '★★★★☆';
            break;
        case children >= 4.5 && children <= 5:
            ratingString = '★★★★★';
            break;
        default:
            ratingString = '';
    }

    return <p className='rating'>{ratingString}</p>;
};

export default Rating;