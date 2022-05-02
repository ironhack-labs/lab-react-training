import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <article className='id-card' >
            <h3>Last Name: {lastName}</h3>
            <h3>First Name: {firstName}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Height: {height}</h3>
            <h3>Birth: {birth.toString()}</h3>
            <img src={picture} alt={lastName} />
        </article>
    )
}

export default IdCard