import "./IdCard.css"

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <div className="IdCards">
            <div >
                <img src={picture} alt={firstName} />
            </div>
            <div>
                <h5>First name: {firstName}, </h5>
                <h5>Last Name: {lastName}</h5>
                <h5>Gender: {gender}</h5>
                <h5>Height: {height.toString()}</h5>
                <h5>Birth: {birth.toString()}</h5>
            </div>


        </div>
    )
}

export default IdCard