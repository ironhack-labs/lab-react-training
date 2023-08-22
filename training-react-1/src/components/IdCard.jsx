const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <div className="IdCard">
            <img src={picture} alt="" />
            <p>Last Name:{lastName}</p>
            <p>First Name:{firstName}</p>
            <p>Gender:{gender}</p>
            <p>Height:{height}</p>
            <p>Birth:{birth.toDateString()}</p>
        </div>
    )
}

export default IdCard