import profiles from '../data/berlin.json';

const Facebook = () => {

    console.log(profiles)
    
    return <table>
        
        {profiles.map(profile => {
           return <tr>
                <img src={profile.img} />
                <h4>First Name: <span>{profile.firstName}</span></h4>
                <h4>Last Name: <span>{profile.lastName}</span></h4>
                <h4>Country: <span>{profile.country}</span></h4>
                {profile.isStudent ? <h4>Type: <span>Student</span></h4> : <h4>Type: <span>Teacher</span></h4>}
        </tr>
    })}
</table>
}


export default Facebook;