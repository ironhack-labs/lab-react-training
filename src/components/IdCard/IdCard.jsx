import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className='card'>
            <img src={picture} alt="avatar profile" />
            <div className='card-body'>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth</strong> {birth.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default IdCard