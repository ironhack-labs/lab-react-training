import './idCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (

        <div className="card-person">

            <article className='card-img'>
                <img src={picture} alt="" />
            </article>
            <article className="text">
                <p><strong>First name:</strong> {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gender: </strong> {gender}</p>
                <p><strong>Heigth:</strong> {height}</p>
                <p> <strong>Birth:</strong> {birth.toDateString()}</p>
            </article>

        </div>


    )

}
export default IdCard