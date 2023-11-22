const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    // const { birth } =

    return (
        <div className="idCard">
            <img src={picture} alt={firstName} />
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height.toString()}</p>
            <p>Birth: {birth.toString()}</p>
        </div>
    )
}

export default IdCard