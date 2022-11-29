import './IdCard.css'

const IdCard = props => {
    const { lastName, firstName, gender, height, birth, picture } = props

    return (

        <article className='IdCard'>
            <div>
                <img src={picture}></img>
            </div>
            <div>
                <p>first Name:{firstName}</p>
                <p>last Name:{lastName}</p>
                <p>gender:{gender}</p>
                <p>height:{height}</p>
                <p>birth:{birth.toDateString()}</p>
            </div>
        </article>



    )
}

export default IdCard




