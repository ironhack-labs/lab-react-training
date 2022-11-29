import './IdCard.css'

const IdCard = props => {
    const { lastName, firstName, gender, height, birth, picture } = props
    return (
        <article className="article">
            <div><img src={picture} alt=''></img></div>
            <div>
                <h3>FirstName:{firstName}</h3>
                <h3>LastName:{lastName}</h3>
                <h3>Gender:{gender}</h3>
                <h3>Height:{height}</h3>
                <h3>Birth:{birth.toDateString()}</h3>
            </div>
        </article>
    )

}

export default IdCard