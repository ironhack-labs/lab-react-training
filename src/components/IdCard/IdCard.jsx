import './IdCard.css'


const IdCard = ({ user }) => {

    let { firstName, lastName, gender, picture, height, birth } = user
    birth = birth.toString()
    return (
        <div className='borde'>

            <img className='img' src={picture} alt='imagen' />
            <ul className='card'>
                <li><strong>Lastname: </strong>{lastName}</li>
                <li> <strong>Firstname:</strong> {firstName}</li>
                <li> <strong>Gender: </strong>{gender}</li>
                <li> <strong>Height:</strong> {height}</li>
                <li> <strong>birth: </strong>{birth}</li>
            </ul>
        </div>
    )
}

export default IdCard