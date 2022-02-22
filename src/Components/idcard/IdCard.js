import './idcard.css'

const IdCard = (props) => {

    const { lastName, firstName, gender, height, birth, picture } = props

    return (
        <article className='idcard'>
            <div className='idPic'>
                <img src={picture} alt={firstName} />
            </div>
            <div className='idInfo'>
                <p>Firstname: {firstName}</p>
                <p>Lastname: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth.toDateString()}</p>

            </div>

        </article>
    )
}

export default IdCard