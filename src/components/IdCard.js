function IdCard(props) {
    let birthdate = props.birth.toUTCString();
    
    birthdate = birthdate.split(0)[0];
    birthdate = birthdate.replace(/,/g, "");
    return (
        <>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {birthdate}</p>
        <img src={props.picture} alt="" />
        </>
    );
}
export default IdCard;