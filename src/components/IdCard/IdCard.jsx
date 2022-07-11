import './IdCard.css'

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {

    return (

        <section className="IdCard">
            <img src={picture} alt="Image" />
            <p>First Name: {firstName}</p>
            <p>Last Name:{lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth:{birth.toDateString()}</p>
        </section>
    )


}

export default IdCard