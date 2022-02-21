import './Rating.css'


const Rating = (props) => {

    const star = (rate) => {

        if (rate === 0) {
            return "☆☆☆☆☆"
        }

        else if (rate === 1) {
            return "★☆☆☆☆"
        }

        else if (rate === 2) {
            return "★★☆☆☆"
        }

        else if (rate === 3) {
            return "★★★☆☆"
        }

        else if (rate === 4) {
            return "★★★★☆"
        }

        else if (rate === 5) {
            return "★★★★★"
        }
    }

    return (

        <div className="Rating">
            <p>{star(Math.round(props.children))}</p>
        </div>
    );

}
export default Rating