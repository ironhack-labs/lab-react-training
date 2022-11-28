import IdCard from './IdCard.css'


const idCard = props => {
    const { lastName,
        firstName,
        gender,
        height,
        birth,
        picture
    } = props

    return (
        <div>
            <img src={picture} />
            <div className='IdCard'>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth.toDateString()}</p>
            </div>
        </div>
    )

}

export default idCard