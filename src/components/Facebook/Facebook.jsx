import profiles from '../../data/berlin.json';
import './Facebook.css';

function Facebook() {
    // console.log(profiles);
    return profiles.map((profile, i) => {
        return (
            <div className="facebook" key={i}>
                <div className="facebook-profile id-card border">
                    <img src={profile.img} alt="profile" className='facebook-profile-img'/>
                    <div className="facebook-info">
                        <p>
                            <strong>First name:</strong> {profile.firstName}
                        </p>
                        <p>
                            <strong>Last name:</strong> {profile.lastName}
                        </p>
                        <p>
                            <strong>Country:</strong> {profile.country}
                        </p>
                        <p>
                            <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
                        </p>
                    </div>
                </div>
            </div>
        );
    });
}

export default Facebook;