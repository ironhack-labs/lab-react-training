import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    const heightToMeters = (height / 100).toString() + "m"
    const birthFormated = birth.toLocaleDateString()
    return (
        <>
            <div className='idCard'>
                <div>
                    <img src={picture} alt={firstName} />

                </div>

                <div className='CardInfo'>
                    <p><b>Fist Name: </b>{firstName}</p>
                    <p><b>Last Name: </b>{lastName}</p>
                    <p><b>Gender: </b>{gender}</p>
                    <p><b>Height: </b>{heightToMeters}</p>
                    <p><b>Birth: </b>{birthFormated}</p>
                </div>

            </div>
        </>
    )

}

export default IdCard