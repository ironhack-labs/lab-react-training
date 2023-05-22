import './Ratings.css'
const Rating = ({ children }) => {

    const round = Math.round(children)
    switch (round) {
        case 0:
            return <p className="stars">☆☆☆☆☆</p>
            break
        case 1:
            return <p className="stars">★☆☆☆☆</p>
            break
        case 2:
            return <p className="stars">★★☆☆☆</p>
            break
        case 3:
            return <p className="stars">★★★☆☆</p>
            break
        case 4:
            return <p className="stars">★★★★☆</p>
            break
        case 5:
            return <p className="stars">★★★★★</p>
            break

    }

}



export default Rating