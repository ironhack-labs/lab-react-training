// import Rating from "../Rating/Rating" // Quiero implementarlo con Rating... pero no se como llamarlo...
import './DriverCard.css'

const DriverCard =(props) => {

    function star() {
        const rating = Math.round(props.rating)
        let score = ''

        for(let i =0; i<5; i++) {
            if (i<rating) {
                score += '★'
            } else score += '☆'
        }
        return score;
    }

    return (
        <div className="DriverCard" >
            <p>{props.name}</p>
            <p> {star()}</p>
            <img src={props.img} alt={props.name}></img>
            <p>{props.car.model} {props.car.licensePlate}</p>
        </div>
    )
}
export default DriverCard