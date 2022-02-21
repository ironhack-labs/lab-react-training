import './idcard.css'

const IdCard = (props) => {

    const { picture, firstName, lastName, gender, height, birth } = props

    return (
        <article className="card">
            <figure>
                <img src={picture} alt='Profile'></img>
            </figure>
            <div>
                <p><strong>Name: </strong>{firstName}</p>
                <p><strong>Lastname: </strong> {lastName}</p>
                <p><strong>Gender: </strong> {gender}</p>
                <p><strong>Height: </strong> {height}</p>
                <p><strong>Birthdate: </strong> {birth.toDateString()}</p>
            </div>

        </article>
    )
}

export default IdCard