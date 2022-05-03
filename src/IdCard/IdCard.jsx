import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return <article className='idCard'>
        <h2>Last Name: {lastName}</h2>
        <h2>First Name: {firstName}</h2>
        <h2>Gender: {gender}</h2>
        <h2>Height: {height}m</h2>
        <h2>Birth: {birth.toString()}</h2>
        <img src={picture} alt={firstName} />
    </article>
}

export default IdCard