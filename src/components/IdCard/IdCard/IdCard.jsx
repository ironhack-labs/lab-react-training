import './IdCard.css'


const IdCard = ({ infoCard }) => {
    const { lastName, firstName, gender, height, birth, picture } = infoCard
    return (
        <div className="IdCard">
            <img src={picture} alt={firstName} />
            <div className="IdTextCard">
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last name: </strong>{lastName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{height}</p>
                <p><strong>Birth: </strong>{birth}</p>
            </div>
        </div>

    )
}

export default IdCard