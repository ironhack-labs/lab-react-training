import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <article className="IdCard">
            <div className='image'>
                <img src={picture} alt="${lastname}" />
            </div>
            <div className="data">
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth}</p>
            </div>



        </article>
    )
}

export default IdCard;