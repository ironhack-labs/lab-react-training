import './Rating.css'

const Rating = ({ rating }) => {

    switch (rating) {
        case "☆☆☆☆☆":
            return <p> {rating}</p>

        case "★☆☆☆☆":
            return <p> {rating}</p>

        case "★★☆☆☆":
            return <p> {rating}</p>

        case "★★★☆☆":
            return <p> {rating} </p>

        case "★★★★☆":
            return <p> {rating} </p>

        case "★★★★★":
            return <p> {rating} </p>
    }

}


export default Rating