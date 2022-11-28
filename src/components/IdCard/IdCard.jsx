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
        <div className='container'>
            <img src={picture} />
            <div>
                <p className='text'>First Name: {firstName}</p>
                <p className='text'>Last Name: {lastName}</p>
                <p className='text'>Gender: {gender}</p>
                <p className='text'>Height: {height}</p>
                <p className='text'>Birth: {birth.toDateString()}</p>
            </div>
        </div>
    )

}

export default idCard