import './IdCard.css'

const IdCard = props => {
    const { lastName, firstName, gender, height, birth, picture } = props
    return (
        <div className='IdCard'>
            <div>
                <img src={picture} />
            </div>
            <div className='Info'>
                <p><strong>Fisrt Name:</strong>{firstName}</p>
                <p><strong>Last Name:</strong>{lastName}</p>
                <p><strong>Gender:</strong>{gender}</p>
                <p><strong>Height:</strong>{height}</p>
                <p><strong>Birth:</strong>{birth.toDateString()}</p>
            </div>
        </div>
    )

}
export default IdCard