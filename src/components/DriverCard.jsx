export const DriverCard = (props) => {

    let numOfStars = Math.round(props.rating)

    function makeStars(num) {
        if (num < 1) {
            return <h2>☆☆☆☆☆</h2>
        } else if (num < 2) {
            return <h2>★☆☆☆☆</h2>
        } else if (num < 3) {
            return <h2>★★☆☆☆</h2>
        } else if (num < 4) {
            return <h2>★★★☆☆</h2>
        } else if (num < 5) {
            return <h2>★★★★☆</h2>
        } else if (num === 5) {
            return <h2>★★★★★</h2>
        }
    }

    return (
        <div className="driver-card-container">
            <img className="profile" src={props.img} alt="profile" width="200px" borderRadius="50" />
            <div className="internal-container-driver-card">
                <p>{props.name}</p>
                <p>{makeStars(numOfStars)}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>



        </div>

    )
}