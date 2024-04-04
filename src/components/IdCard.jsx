

function IdCard (props) {
    const { lastName, firstName, gender, height, birth, picture } = props;

    return (
        <div className="idCard">
            <div className="photo">
                <img src={picture} />
            </div>

            <div className="idCard-info">
                <p><b>First name:</b> {firstName}</p>
                <p><b>Last name:</b> {lastName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}</p>
                <p><b>Birth:</b> {birth.toDateString()}</p>
            </div>
        </div>
    );
}

export default IdCard