import './idCard.css'
const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
    console.log(firstName)
    return (
        <article className="idCard">
            <img src={picture} alt="" />
            <div className="info">


                <p>FirstName: {firstName}</p>
                <p>Lastname: {lastName}</p>

                <p>Gender: {gender}</p>
                <p>Height:{height}</p>
                <p>Birth:{birth}</p>
            </div>


        </article>
    )
}

export default IdCard