function IdCard({lastName, firstName, gender, height, birth, picture}){
    return (
        <div className="IdCard">
            <div className="IdCard__ImageContainer">
                <img src={picture}/>
            </div>
            <div className="IdCard__InfoContainer">
                <p><strong>First name: </strong>{firstName}</p>
                <p><strong>Last name: </strong>{lastName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height </strong>{height}</p>
                <p><strong>Birth: </strong>{birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;