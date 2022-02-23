import './IdCard.css'



const IdCard = ({ lastName, firstName, gender, heigth, birth, picture }) => {

    return (
        <article className="IdCard">
            <img src={picture}/>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Gender: {gender}</p>   
            <p>Heigth: {heigth}</p>
            <p>Birth: {birth.toLocaleString()}</p>        
        </article>
    )
}

export default IdCard

