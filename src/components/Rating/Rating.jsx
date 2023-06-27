import './Rating.css'

const Rating = ({ rating }) => {
    rating = Math.round(rating)

    if (rating == 0) {
        return (
            <div className="startRating">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        )
    }
    if (rating == 1) {
        return (
            <div className="startRating">
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        )
    }
    if (rating == 2) {
        return (
            <div className="startRating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        )
    }
    if (rating == 3) {
        return (
            <div className="startRating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        )
    }
    if (rating == 4) {
        return (
            <div className="startRating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
        )
    }
    if (rating == 5) {
        return (
            <div className="startRating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
        )
    }
}

export default Rating