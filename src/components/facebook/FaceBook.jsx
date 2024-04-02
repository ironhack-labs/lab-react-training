import profiles from '../../data/berlin.json';
import './FaceBook.css';

function FaceBook() {
    return (
        <div>
            {profiles.map((profile, index) => (
                <div key={index} className='cardFB'>
                    <img src={profile.img}/>
                    <div>
                        <h5>Firts name: {profile.firstName}</h5>
                        <h5>Last name: {profile.lastName}</h5>
                        <h5>Country: {profile.country}</h5>
                        <h5>Type: {profile.isStudent ? 'Student' : 'Teacher'}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FaceBook