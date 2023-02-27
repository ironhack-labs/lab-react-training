
function CardInfo({ userInfo }) {
    const { firstName,
        lastName,
        gender,
        height,
        birth,
    } = userInfo
    const date = new Date(birth).toString()
    return (
        <div>
            <p><strong>First name: </strong> {firstName}</p>
            <p><strong>Last name: </strong> {lastName}</p>
            <p><strong>Gender: </strong> {gender}</p>
            <p><strong>Height: </strong> {height}</p>
            <p><strong>Birth: </strong> {date}</p>
        </div>
    );
}

export default CardInfo;


