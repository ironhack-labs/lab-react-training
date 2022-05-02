import "../styles/IdCard.css"

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="idCards">
            <div>
                <figure>
                    <img src={picture} alt="Imagen de DNI" />
                </figure>
            </div>
            <div>
                <p>First Name : {firstName}</p>
                <p>Last Name : {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth.toLocaleString()}</p>
            </div>  
        </div>)
}
export default IdCard