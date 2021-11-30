
import './IdCard.css'

const IdCard = (props) => {

    const { lastName, firstName, gender, height, birth, picture } = props

    return(
        <div className="IdCard">
            <div>
                <img src={picture} alt="Perfil img" />
            </div>
            <div>
                <p><span>First Name:</span>{firstName}</p>
                <p><span>Last Name:</span>{lastName}</p>
                <p><span>Gender:</span>{gender}</p>
                <p><span>Height:</span>{height}</p>
                <p><span>Birth:</span>{birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard