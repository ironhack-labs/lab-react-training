const IdCard = ({ info }) => {
    const { firstName, lastName, gender, height, birth, picture } = info
    return (
        <>
            <img src={picture} alt={firstName} />
            <p><strong>First name:</strong> {firstName}</p>
            <p><strong>Last name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height}</p>
            <p><strong>Birth:</strong> {birth}</p>
        </>
    )
}

export default IdCard


