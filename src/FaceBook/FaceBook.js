import './FaceBook.css'
import profiles from '../data/berlin.json';

const FaceBook = () => {

    return (
        profiles.map((elm, idx) => {
            return (
                <article key={idx} className="facebook" >
                    <img src={elm.img} alt={elm.firstName} />
                    <div>
                        <p><strong>First Name: </strong>{elm.firstName}</p>
                        <p><strong>Last Name: </strong>{elm.lastName}</p>
                        <p><strong>Country: </strong>{elm.country}</p>
                        {elm.isStudent ? <p><strong>Type: </strong>Student</p> : <p><strong>Type: </strong>Teacher</p>}
                    </div>
                </article>)
        }
        )
    )
}

export default FaceBook