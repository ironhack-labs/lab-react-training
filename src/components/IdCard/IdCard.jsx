import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <article className="StudentCard" >
            <div>
                <img src={picture} alt={firstName} />
            </div>
            <div>
                <p>First name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height} m</p>
                {/* <p>{birth}</p> */}
            </div>
        </article>
    )
}

export default IdCard