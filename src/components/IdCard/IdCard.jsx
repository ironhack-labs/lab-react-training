import './IdCard.css'
const IdCard = ({ IdInfo }) => {

    const { lastName, firstName, gender, height, birth, picture } = IdInfo

    const date = new Date(birth).toDateString()

    return (
        <div className='IdInfo'>
            <div className='IdPicture'>
                <img src={picture} alt="Picture" />
            </div>
            <div>
                <ul>
                    <li><p> Last name: {lastName} </p></li>
                    <li><p> First name: {firstName} </p></li>
                    <li><p> Gender: {gender} </p></li>
                    <li><p> Height: {height} </p></li>
                    <li><p> Date of birth: {date} </p></li>
                </ul>
            </div>
        </div>
    )

}

export default IdCard