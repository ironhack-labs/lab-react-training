import './IdCard.css'

const IdCard = props => {

    const { firstName, lastName, gender, height, birth, picture } = props

    return (
        <div className='idcard'>
            <div className='idcard-info'>
                <h3>{`First name : ${firstName}`}</h3>
                <h3>{`Last name : ${lastName}`}</h3>
                <h3>{`Gender : ${gender}`}</h3>
                <h3>{`Height : ${height}`}</h3>
                <h3>{`Birth : ${birth.toDateString()}`}</h3>
            </div>
            <img className='idcard-image' src={picture}></img>
        </div>
    )
}

export default IdCard