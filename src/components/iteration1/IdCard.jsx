import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <section>
            <article className='IdCard'>
                <img src={picture} alt={picture} />
                <p>{lastName}</p>
                <p>{firstName}</p>
                <p>{gender}</p>
                <p>{height}</p>
                <p>{birth.toDateString()}</p>
            </article>
        </section>
    )
}

export default IdCard