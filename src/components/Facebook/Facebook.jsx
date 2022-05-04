import './Facebook.css'
import profiles from './data/berlin.json'

console.log(profiles)
const Facebook = ({ firstName, lastName, country, img, isStudent }) => {
    return (
        <article className='Facebook' >
            <h2>Last Name: {lastName}</h2>
            <h2>First Name: {firstName}</h2>
            <h2>Country: {country}</h2>
            <h2>Student: {isStudent}</h2>
            <img src={img} alt={firstName} />
        </article >
    )
}

export default Facebook