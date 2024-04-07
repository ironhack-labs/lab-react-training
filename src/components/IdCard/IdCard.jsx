import './IdCard.css'

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    const formattedBirth = birth.toDateString();
    return(
        <div className="IdCard">
            <img src={picture} alt={`${lastName}`}></img>
            <div className="IdCardInfo">
                <div><b>First name:</b>{firstName}</div>
                <div><b>Last name:</b>{lastName}</div>
                <div><b>Gender:</b>{gender}</div>
                <div><b>Height:</b>{height}</div>
                <div><b>Birth:</b>{formattedBirth}</div>        
            </div>

            
        </div>
    )
}

export default IdCard;