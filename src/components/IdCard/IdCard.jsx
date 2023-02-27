import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {


    return (

        <article className="IdCard">
            <div className='Div-card'>
                <img src={picture} alt={firstName} />
            </div>
            <div className='Div-card'>
                <p>First Name: {firstName}</p>
                <p> Last Name: {lastName} </p>
                <p> Gender: {gender}</p>
                <p> Height: {height}</p>
                <p> Birth: {birth}</p>
            </div>
        </article>
    )

}
export default IdCard;

