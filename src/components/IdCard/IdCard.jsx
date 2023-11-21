import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <div className='card'>
            <div className='cardImage'>
                <img src={picture} alt={firstName} />
            </div>
            <ul>
                <li><p>First Name: {firstName}</p></li>
                <li><p>Last Name: {lastName}</p></li>
                <li><p>Gender: {gender}</p></li>
                <li><p>Height: {(height / 100).toFixed(2)}m</p></li>
                <li><p>Birth: {birth.toString().slice(0, 16)}</p></li>
            </ul>
        </div>
    )

}

export default IdCard