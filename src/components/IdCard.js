function IdCard(props) {
    return(
        <div>
        <img src={props.picture} />
         <p>First Name: {props.firstName}</p>
         <p>Last Name: {props.lastName}</p>
         <p>Gender: {props.gender}</p>
         <p>Height: {props.height}m</p>
         <p>Birth: {props.birth.toString()}</p>
        </div>
    );
};


export default IdCard;
