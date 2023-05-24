import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const date = birth.toString()

    return (
        <div className="card">
            <img className="img" src={picture} alt={firstName} />
            <div className='dataCard'>
                <p><strong>First name:</strong>  {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {date}</p>
            </div>
        </div>
    )
}

export default IdCard;
