import './IdCard.css'

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
    console.log('hola', birth)
    return (
        <article className="IdCard">

            <img src={picture} alt="picture" />

            <footer>
                <h3>First name:{firstName}  </h3>
                <h3>Last name: {lastName}</h3>

                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth}</p>
                <hr />
            </footer>

        </article>
    )
}


export default IdCard