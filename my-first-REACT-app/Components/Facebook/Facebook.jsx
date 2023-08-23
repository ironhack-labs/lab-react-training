import profiles from './../../src/data/berlin.json'

const Facebook = ({ profiles }) => {



    const newProfilesArray = profiles.map((profile) => {
        const { firstName, lastName, country, isStudent } = profile;
        return (
            <div className='profileCard'>
                <img src={profile.img} alt="" />
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Country: {country}</p>
                <p>Type: {isStudent ? "Student" : "Teacher"}</p>
            </div>
        )

    })


    return (
        { newProfilesArray }
    )
}


export default Facebook