import './FaceBook.css'
import profiles from './../../data/berlin.json';


const FaceBook = () => {

    profiles.map(({ firsName, lastName, country, img, isStudent } => ))



return (

    <div>
        <img src={img} alt="" />
        <p>{firsName}</p>
        <p>{lastName}</p>
        <p>{country}</p>
        <p>{isStudent}</p>
    </div>


)
}

export default FaceBook