export const IdCard = (props) => {
    const {picture, firstName, lastName, gender, height, birth} = props;
    return (
        <div>
            <div className="IdCard">
                <img src={picture} alt="persons"/>
                <div>
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name: </strong>{lastName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{height}</p>
                <p><strong>Birthday: </strong>{birth}</p>
                </div>
            </div>
        </div>
    )
}