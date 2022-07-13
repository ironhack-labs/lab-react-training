import './IdCard.css'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {

    return (
        <article className="id-card">

            <img src={picture} alt="idCard" />

            <footer className='data'>
                <h3><strong> First name: </strong> {firstName}</h3>
                <h3><strong>Last name:</strong> {lastName}</h3>
                <h3><strong>Gender:</strong> {gender}</h3>
                <h3><strong>Height: </strong>{height}</h3>
                <h3><strong>Birth:</strong> {birth.toDateString()}</h3>
            </footer>

        </article>
    )
}


export default IdCard