
function IdCard (props) {
return(
    <div className="IdCard">
        <div>
            <img src={props.picture}/>
        </div>
        <div>
            <h3><b>Firts name:</b> {props.firstName}</h3>
            <h3><b>Last name:</b> {props.lastName}</h3>
            <h3><b>Gender:</b> {props.gender}</h3>
            <h3><b>Height:</b> {props.height}</h3>
            <h3><b>Birth:</b> {props.birth}</h3>
            
        </div>

    </div>
)
}

export default IdCard