import './IdCard.css'

const IdCard = props => {

    const { lastName, firstName, gender, height, birth, picture } = props

    return (
        <section className='IdCard'>
            <img src={picture} alt="user image" />
            <p><span className='TxtBold'>First Name:</span> {firstName}</p>
            <p><span className='TxtBold'>Last Name:</span> {lastName}</p>
            <p><span className='TxtBold'>Gender:</span> {gender}</p>
            <p><span className='TxtBold'>Height:</span> {height}</p>
            <p><span className='TxtBold'>Birth:</span> {birth.toDateString()}</p>
        </section>
    )

}

export default IdCard
