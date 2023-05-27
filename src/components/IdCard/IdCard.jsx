import "./IdCard.css"
function IdCard (props){
    return(
<div>
    <div className="contenedor-IdCard">
        <div className="contenedor-imagen">
            <img src={props.picture} alt="" />
        </div>
        <div className="contenedor-info">
            <p className="style-p"><span className="bold">First Name:</span>  {props.firstName}</p>
            <p className="style-p"><span className="bold">Last Name:</span> {props.lastName}</p>
            <p className="style-p"><span className="bold">Gender:</span> {props.gender}</p>
            <p className="style-p"><span className="bold">Height:</span> {props.height} cm</p>
            <p className="style-p"><span className="bold">Birth:</span> {props.birth.toLocaleString()}</p>
        </div>
    </div>

</div>
    )
}

export default IdCard

