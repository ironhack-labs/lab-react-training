import './idCard.css'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) =>{
    return(
        <article className="card">
            <img src={picture} alt={picture} />
            <p>Last Name: {lastName}</p>
            <p>First Name: {firstName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth.toString()}</p>

        </article>
    )
}
export default IdCard