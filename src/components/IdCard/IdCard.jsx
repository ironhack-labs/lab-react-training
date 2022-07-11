import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <article className='id-card'>
            <img src={picture} alt='Profile picture' />

            <footer>
                <p><b>First Name:</b> {firstName}</p>
                <p><b>Last Name:</b> {lastName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}</p>
                <p><b>Birth:</b> {birth}</p>
            </footer>
        </article>
    )
}

export default IdCard