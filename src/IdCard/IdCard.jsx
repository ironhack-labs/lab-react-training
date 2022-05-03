import './IdCard.css'

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
    return (
        <div className='it1'>
            <div className="row idCard">
                <div className="col-2">
                    <img src={picture} alt={firstName} /></div>
                <div className="col">
                    <p> <strong>First Name:</strong>{firstName}</p>
                    <p> <strong>Last Name:</strong>{lastName}</p>
                    <p> <strong>Gender:</strong>{gender}</p>
                    <p> <strong>Height:</strong>{height}</p>
                    <p> <strong>Birth:</strong>{birth.toLocaleString()}</p></div></div>
        </div>
    )
}

export default IdCard