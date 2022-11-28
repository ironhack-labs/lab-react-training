import './Idcard.css'

const IdCard = props => {

    const { firstName, lastName, gender, height, birth, picture } = props

    return (
        <article className="Idcard">
            <img src={picture} alt="img" className="picture" />
            <h5 >First name: {firstName}</h5>
            <h5 >Last name: {lastName}</h5>
            <h5 >Gender: {gender}</h5>
            <h5 >Height: {height}</h5>
            <h5 >Birth: {birth.toDateString()}</h5>

        </article>
    )

}
export default IdCard