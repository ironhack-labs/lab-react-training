function IdCard(props) {
    
    return ( 
        <div>
        <img src={props.picture} alt="foto"></img>
        <p>Last Name: {props.lastName}</p>
        <p>First Name: {props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toLocaleString()}</p>
        </div>
     );
}

export default IdCard;