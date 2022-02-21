import './Rating.css'

const Rating = ({ children }) => {

    if (children <= 2) {
        return <i className="fa-thin fa-star-sharp"></i>
    }

    if (children = 5) {
        return <i className="fa-solid fa-star-sharp"></i>
    }

    return (
        <span>{children}</span>
    )

}

export default Rating