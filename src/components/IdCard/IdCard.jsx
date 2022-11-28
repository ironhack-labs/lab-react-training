import './IdCard.css'

const IdCard = props => {


    const { lastName, firstName, gender, height, birth, picture } = props


    return (
        <div className='IdCard'>
            <img src={picture} alt="Profile Picture" />
            <ul>
                <li>
                    First Name: {firstName}
                </li>
                <li>
                    Last Name: {lastName}
                </li>
                <li>
                    Gender: {gender}
                </li>
                <li>
                    Height: {height}
                </li>
                <li>
                    Birth: {birth.toDateString()}
                </li>
            </ul>
        </div>
    )
}

export default IdCard