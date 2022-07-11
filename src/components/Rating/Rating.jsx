import "./Rating.css"

const Rating = ({ children }) => {
    const rateNum = Math.round(children)
    console.log(rateNum)
    switch (rateNum) {
        case 0:
            return <p className="rating">☆☆☆☆☆</p>;
            break;
        case 1:
            return <p className="rating">★☆☆☆☆</p>;
            break;
        case 2:
            return <p className="rating">★★☆☆☆</p>;
            break;
        case 3:
            return <p className="rating">★★★☆☆</p>
            break;
        case 4:
            return <p className="rating">★★★★☆</p>
            break;
        case 5:
            return <p className="rating">★★★★★</p>;
            break;

    }



}


export default Rating;