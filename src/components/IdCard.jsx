function IdCard (props) {
    const {firstName, lastName, gender, height, birth, picture} = props;
    return (
    <div>
    <h3>First Name: {firstName}</h3>
    <h3>Last Name: {lastName}</h3>
    <h3>Gender: {gender}</h3>
    <h3>Height: {height}</h3>
    <h3>Birth: {birth.toLocaleString()}</h3>
    <img src={picture} />
    </div>
    ); 
}

export default IdCard;