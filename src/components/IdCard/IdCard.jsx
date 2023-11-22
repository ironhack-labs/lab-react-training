import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <div className='IdCard'>
            <img src={picture} alt="" />
            <ul>
                <li>First name: {firstName}</li>
                <li>Last Name: {lastName}</li>
                <li>Gender: {gender}</li>
                <li>Heigth: {height / 100}m</li>
                <li>Birth: {birth.toDateString()}</li>
            </ul>
        </div>
    )
}


export default IdCard