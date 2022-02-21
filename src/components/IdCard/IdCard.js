import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (

        <article className="IdCard">
            <div className='photo'>
                <img src={picture} alt="Student" />
            </div>
            <div className='student-info'>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth.toDateString()}</p>
            </div>
        </article>
    )
}

export default IdCard
