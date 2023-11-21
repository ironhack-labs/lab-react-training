import profiles from '../../data/berlin.json';

function FaceBook() {
    return (
        <div>
            { profiles.map((profile, i) => {
                return (
                    <div key={ i }>
                        <img src={ profile.img } alt={ profile.firstName } />
                        <p>First Name: { profile.firstName }</p>
                        <p>Last Name: { profile.lastName }</p>
                        <p>Country: { profile.country }</p>
                        <p>Type: { profile.isStudent ? 'Student' : 'Teacher' }</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FaceBook