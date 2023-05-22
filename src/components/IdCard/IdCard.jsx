import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const birthFormatted = birth.toDateString()

    return (
        <div className="idCard">
            <div>
                <img src={picture} alt={firstName} />
            </div>
            <div>
                <p><strong> FIRST NAME: </strong>{firstName}</p>
                <p><strong> LAST NAME: </strong>{lastName}</p>
                <p><strong> GENDER: </strong>{gender}</p>
                <p><strong> HEIGHT: </strong>{height}</p>
                <p><strong> BIRTH: </strong>{birthFormatted}</p>
            </div>

        </div>

    )
}


export default IdCard

