import "./IdCard.css"
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', };
    const birthday = birth.toLocaleDateString("en-US", options)

    return (
        <div className="cardCont">
            <figure><img src={picture} alt={firstName} /></figure>
            <div>
                <p>Last Name: {lastName}</p>
                <p>First Name: {firstName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birthday}</p>

            </div>
        </div>
    )
}

export default IdCard