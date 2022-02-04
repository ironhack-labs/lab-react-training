import './Idcard.css'

function Idcard(props) {
    return(
        <div className="idcard-content">
            <img src={props.picture} alt='description'></img>
            <div className="idcard-text">
            <span> <b> First name: </b> {props.firstName}</span>
            <span> <b> Last name: </b> {props.lastName}</span>
            <span> <b> Gender: </b> {props.gender}</span>
            <span> <b> Height: </b> {props.height}</span>
            <span> <b> Birth: </b> {props.birth.toString()}</span>
            </div>
        </div>
    )
}
export default Idcard; 
