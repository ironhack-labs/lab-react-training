import './IdCard.css'

const IdCard = ({ infoCard }) => {
    const { lastName, firstName, gender, height, birth, picture } = infoCard
    const date = birth.toDateString()

    return (

        <div className="IdCard">
            <div >
                <img src={picture} alt={firstName} />
            </div>
            <div className='info-container'>
                <p><b>First name:</b>{firstName}</p>
                <p><b>Last name: </b>{lastName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height: </b>{height}</p>
                <p><b>Birth: </b>{date}</p>
            </div>
        </div>

    )
}
export default IdCard