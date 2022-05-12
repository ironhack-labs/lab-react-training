const IdCard = (props) => {
    const {
        picture,
        firstName,
        lastName,
        gender,
        height,
        birth
    } = props
    return (
        <div className="Card">
            <div className="image">
                <img src={picture} alt=""/>
            </div>
            <div className="info">
                <p>
                    <strong>First name:
                    </strong>{firstName}</p>
                <p>
                    <strong>Last name:
                    </strong>{lastName}</p>
                <p>
                    <strong>Gender:
                    </strong>{gender}</p>
                <p>
                    <strong>Height:
                    </strong>{height / 100}</p>
                <p>
                    <strong>Birth:
                    </strong>{birth.toDateString()}</p>
            </div>
        </div>
    )

}

export default IdCard;