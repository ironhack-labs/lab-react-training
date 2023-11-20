const Rating = ({ children }) => {
    const value = Math.floor(children)
    switch (value) {
        case 0:
            return <div className="Rating">☆☆☆☆☆</div>
        case 1:
            return <div className="Rating">★☆☆☆☆</div>
        case 2:
            return <div className="Rating">★★☆☆☆</div>
        case 3:
            return <div className="Rating">★★★☆☆</div>
        case 4:
            return <div className="Rating">★★★★☆</div>
        case 5:
            return <div className="Rating">★★★★★</div>
        default:
            break;
    }

}

export default Rating