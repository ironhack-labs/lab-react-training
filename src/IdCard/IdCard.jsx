import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <article className="IdCard">
            <img src={picture} alt="" />
            <p>Last name:{lastName}</p>
            <p>First name:{firstName}</p>
            <p>Gender:{gender}</p>
            <p>Height:{height}</p>
            <p>Birth:{birth.toString()}</p>
        </article>
    )
}

export default IdCard