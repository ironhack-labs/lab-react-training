   
import './IdCard.css';


const IdCard = (props) => {
    
    const {firstName, lastName, gender, height, birth, picture} = props
    
    return (
        <div className= "IdCard">
            <img className="idImg" src={picture} alt={firstName} />
            <div className="idText">
                <p><b>First name:  </b>{firstName}</p>
                <p><b>Last name:  </b>{lastName}</p>
                <p><b>Gender:  </b>{gender}</p>
                <p><b>Height:  </b>{height}</p>
                <p><b>Birth:  </b>{birth}</p>
            </div>
        </div>
    )
}

export default IdCard