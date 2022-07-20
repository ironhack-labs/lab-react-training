
function IdCard(props){

    const {lastName, firstName, gender, height, birth, picture} = props;
    const stringBirth = birth.toString().slice(0, 15);

    return(
    <div className="IdCard">
        <div className="border-flex">
        <img src={picture} alt="" />
        <div className="data">
            <p><strong>First name:</strong> {firstName}</p>
            <p><strong>Last name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height}</p>
            <p><strong>Birth:</strong> {stringBirth}</p>
        </div>
        </div>
    </div>
    )
}

export default IdCard;