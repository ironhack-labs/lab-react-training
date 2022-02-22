import profiles from '../../data/berlin.json';
import './FaceBook.css'

const FaceBook = () => {
    return(
        <div className="facebook">
            {profiles.map((user, index) => {
                return (
                    <div className="facebook-card" key={index}>
                        <img src={user.img} alt="" />
                        <ul>
                            <li><span>First Name: </span> {user.firstName}</li>
                            <li><span>Last Name: </span>{user.lastName}</li>
                            <li><span>Country: </span>{user.country}</li>
                            <li><span>Type: </span>{user.isStudent ? 'Student' : 'Teacher'}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default FaceBook