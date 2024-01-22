function IdCard (props){
    // console.log (props.birth.toDateString());
    // console.log (props.birth.getDay());
    
    return (
        <div className="id-card">
            <img src={props.picture} alt="" />
            <ul>
                <li>First Name: {props.firstName}</li>
                <li>Last Name: {props.lastName}</li>
                <li>Gender: {props.gender}</li>
                <li>Height: {props.height}</li>
                <li>Birth: {props.birth.toDateString()}</li>
            </ul>
        </div>
    )
}
export default IdCard;