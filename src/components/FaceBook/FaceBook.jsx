import profiles from '../../data/berlin.json'
import './FaceBook.css'

const Facebook = () => {
    return (
        <div className='facebook-wrapper'>
        { profiles.map((profile, index) => {
            return(
                <div key={index} className='facebook-card'>
                    <img src={profile.img} alt="facebook" />
                    <div className='facebook-card-body'>
                        <p><strong>First Name:</strong> {profile.firstName}</p>
                        <p><strong>Las Name:</strong> {profile.lastName}</p>
                        <p><strong>Country:</strong> {profile.country}</p>
                        <p><strong>Type:</strong> {profile.isStudent ? 'Student' :' Teacher'}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Facebook