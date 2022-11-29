import './IdCard.css'
const IdCard = props => {

    const { lastName, firstName, gender, height, birth, picture } = props

    return (
        <article className='IdCard'>
            <div className='PictureCard'>
                <img src={picture} alt='picture'></img>
            </div>
            <p>LastName: {lastName}</p>
            <p>FirstName: {firstName}</p>
            <p>Gender: {gender}</p>
            <p>Heigth: {height}</p>
            <p>Birth: {birth.toDateString()}</p>

        </article>
    )
}

export default IdCard