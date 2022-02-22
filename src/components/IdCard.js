import react from 'react'
function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (

        <div>
            <img src={picture} alt="userimage" />

            <div>
                <p><strong>Last name:</strong>{lastName}</p>
                <p><strong>first Name:</strong>{firstName}</p>
                <p><strong>Gender:</strong>{gender}</p>
                <p><strong>Height:</strong>{height}</p>
                <p><strong>Birth:</strong>{birth.toString()}</p>
            </div>
        </div>
    )

}

export default IdCard