const Rating = (props) => {
    const { children } = props
    function starsRating(rating) {
        switch (Math.round(rating)) {
            case 1:
                return "⭐☆☆☆☆";
            case 2:
                return "⭐⭐☆☆☆";
            case 3:
                return "⭐⭐⭐☆☆";
            case 4:
                return "⭐⭐⭐⭐☆";
            case 5:
                return "⭐⭐⭐⭐⭐"
            default:
                return "☆☆☆☆☆"
        }
    }
    return (
        <div>
            <p>{starsRating(children)}</p>
        </div>
    )
}
export default Rating