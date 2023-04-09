function IdCard({lastName, firstName, gender, height, birth, picture}){

    return (
        <div className="IdCard">
            <img className="IdPic" src={picture} alt="IdPicture" />
            <div className="IdInfo">
                <p><strong>First name:</strong> {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gender:</strong>{gender}</p>
                <p><strong>Height:</strong>{height}</p>
                <p><strong>Birth:</strong>{birth.toUTCString()}</p>
            </div>
        </div>
    )
}

export default IdCard