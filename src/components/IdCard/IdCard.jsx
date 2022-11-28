import './IdCard.css'

const IdCard = props => {
    const { lastName, firstName, height, birth, picture, gender } = props

    return (
        <>
            <h3>Last Name {lastName}</h3>
            <p>First Name {firstName}</p>
            <p>Height {height}</p>
            <p>Birth {birth.toDateString()}</p>
            <img src={picture} /><img />
            <p>Gender {gender}</p>
        </>
    )
}
export default IdCard