import './Idcards.css'

const IdCard = props => {

    console.log(props)

    const { lastName, firstName, gender, height, birth, picture } = props

    return (
        <div>
            <img src={picture} alt="picture" />
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>{birth.toDateString()}</p>


            <hr />
        </div>

    )
}

export default IdCard