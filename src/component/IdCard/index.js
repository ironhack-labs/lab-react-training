import './IdCardStyles.css'

const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture } = props

    return(
    <div className="IdCard">
            <div className='ProfilePicture'>
                <img src={picture} alt="icon-profile"/>
            </div>
        <div className='PInfo'>
            <p>LastName: {lastName}</p>
            <p>FirstName: {firstName}</p>
            <p>Gender: {gender} </p>
            <p>Height: {height} </p>
            <p>Birth: {birth.toDateString()}</p>
        </div>
    </div>
    )
}

export default IdCard;