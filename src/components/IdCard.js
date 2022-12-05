const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture} = props;
    return(
        <div className="IdCard">
            <img src={picture} alt="Please submit a Profile Picture"/>
            <div className="idTextBox">
                <p><strong>Surname:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birthday:</strong> {birth}</p>
                <p><strong>Name:</strong> {firstName}</p>
            </div>
        </div>
    )
}

export default IdCard