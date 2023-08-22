import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {


    const birthDate = birth.toString().slice(0, 15)



    return (
        <article className="IdCard">
            <img src={picture} alt="{firstName} {lastName}" />
            <p>Last name: {lastName}</p>
            <p>First name: {firstName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>birth: {birthDate}</p>

        </article>
    )
}

export default IdCard
