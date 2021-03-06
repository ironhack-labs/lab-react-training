import profiles from '../../data/berlin.json';

const Facebook = () => {
    return (
        <div>
            {profiles.map(profile => {
                return <div className="row border border-dark p-2 mb-2 align-items-center">
                    <div className="col-3">
                        <img className="w-100" src={profile.img} alt={profile.firstName} />
                    </div>
                    <div className="col">
                        <p><b>First name:</b> {profile.firstName}</p>
                        <p><b>Last name:</b> {profile.lastName}</p>
                        <p><b>Country:</b> {profile.country}</p>
                        <p><b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Facebook;