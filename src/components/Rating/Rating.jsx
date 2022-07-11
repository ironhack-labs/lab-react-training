import './Rating.css'

const Rating = ({ children }) => {
    switch (Math.round(children)) {
        case 0:
            return ('☆☆☆☆☆');
            break;
        case 1:
            return ('★☆☆☆☆');
            break;
        case 2:
            return ('★★☆☆☆');
            break;
        case 3:
            return ('★★★☆☆');
            break;
        case 4:
            return ('★★★★☆');
            break;
        case 5:
            return ('★★★★★');
            break;
    }
}

export default Rating