import profiles from "../data/berlin.json";

/* eslint-disable react/prop-types */
function FaceBook() {
    const countries = []
    for (let profile of profiles) {
        if (!countries.includes(profile.country)) countries.push(profile.country)
    }

    function highlightProfiles(event, country) {
        [...document.querySelectorAll(".idCard")].forEach(div => div.style.backgroundColor = "white");
        [...document.querySelectorAll(".countryBtn")].forEach(btn => {
            btn.style.backgroundColor = "rgb(240, 240, 240)"
            btn.style.border = "1px solid #dcdcdc"
        });

        event.target.style.backgroundColor = "lightblue"
        const profDivs = [...document.querySelectorAll(".idCard")]
        for (let profDiv of profDivs) {
            const profIndex = Number(profDiv.id)
            const profData = profiles[profIndex]
            if (profData.country == country) profDiv.style.backgroundColor = "lightblue"
        }
    }

    return (
        <div>
            <div style={{marginBottom: "10px"}}>
                {countries.map(country => (
                    <button key={country} onClick={(event) => highlightProfiles(event, country)} style={{marginLeft: "3px"}} className="countryBtn">{country}</button>
                ))}
            </div>
            {profiles.map(profile => (
                <div className="idCard" key={profiles.indexOf(profile)} id={profiles.indexOf(profile)}>
                    <img src={profile.img}></img>
                    <div>
                        <p><span style={{'fontWeight': 'bold'}}>First Name:</span> {profile.firstName}</p>
                        <p><span style={{'fontWeight': 'bold'}}>Last Name:</span> {profile.lastName}</p>
                        <p><span style={{'fontWeight': 'bold'}}>Country:</span> {profile.country}</p>
                        <p><span style={{'fontWeight': 'bold'}}>Type:</span> {profile.isStudent ? "Student" : "Teacher"}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FaceBook