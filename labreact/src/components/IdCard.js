import './IdCard.css'

export default function IdCard({lastName, firstName, gender,
height, birth, picture}) {
    return (
        <div className="id-card">
        <img src={picture} alt={firstName}/>
        <div>
            <p><b>First Name:</b>{firstName}</p>
            <p><b>Last Name:</b>{lastName}</p>
            <p><b>Gender:</b>{gender}</p>
            <p><b>Height:</b>{height}</p>
            <p><b>Birth:</b> {String(birth)}</p>
        </div>
 
            
        </div>
    )
}
