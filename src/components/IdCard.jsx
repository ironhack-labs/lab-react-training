
import './IdCard.css'

const IdCard = props => {

    const { picture, firstName, lastName, gender, height, birth } = props

    return (
        <div className='IdCard'>
            <img src={picture}></img>

            <div className='IdCardInfo'>

                <h2>First Name: {firstName} </h2>
                <h2>Last Name: {lastName} </h2>
                <h2>Gender: {gender}</h2>
                <h2>Height: {height}</h2>
                <h2>Birth: {birth.toString()} </h2>
            </div>
        </div>
    )
}

export default IdCard
