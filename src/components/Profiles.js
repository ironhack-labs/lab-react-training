
function Profiles(props) {

    const { filteredProfiles, countryToHighlight, showImageClicked, detailsToShow } = props



    return (
        filteredProfiles.map((profile) => {


            if (profile.country === countryToHighlight || countryToHighlight === "allCountries") {
                return (

                    <div className="container card" key={props.filteredProfiles.indexOf(profile)} style={{ backgroundColor: 'lightblue', width:600 }} >
                        <div className="d-flex flex-row justify-content-start" >
                            <div>
                                <img onClick={showImageClicked} src={profile.img} style={{ width: 200, height: 200 }} />
                            </div>
                            {profile.img === detailsToShow
                                ?
                                <div className="m-3">
                                    <h3 className="d-flex justify-content-start">First name:&nbsp;<span>{profile.firstName}</span></h3>
                                    <h3 className="d-flex justify-content-start">Last name:&nbsp;<span>{profile.lastName}</span></h3>
                                    <h3 className="d-flex justify-content-start">Country:&nbsp;<span>{profile.country}</span></h3>
                                    {profile.isStudent
                                        ?
                                        <h3 className="d-flex justify-content-start">Type:&nbsp;<span>Student</span></h3>
                                        :
                                        <h3 className="d-flex justify-content-start">Type:&nbsp;<span>Teacher</span></h3>}

                                </div>
                                :
                                <div hidden>
                                    <h3>First name:<span>{profile.firstName}</span></h3>
                                    <h3>Last name:<span>{profile.lastName}</span></h3>
                                    <h3>Country:<span>{profile.country}</span></h3>
                                    {profile.isStudent
                                        ?
                                        <h3>Type:<span>Student</span></h3>
                                        :
                                        <h3>Type:<span>Teacher</span></h3>}

                                </div>


                            }
                        </div>
                    </div>
                )
            }
            else {
                return (

                    <div className="container card profiles" key={props.filteredProfiles.indexOf(profile)} country={profile.country} style={{ backgroundColor: 'white', width:600 }}>
                        <div className="d-flex flex-row justify-content-start">
                            <div >
                                <img onClick={showImageClicked} src={profile.img} style={{ width: 200, height: 200 }} />
                            </div>
                            {profile.img === detailsToShow
                                ?
                                <div className="m-3">
                                    <h3 className="d-flex justify-content-start">First name:&nbsp;<span>{profile.firstName}</span></h3>
                                    <h3 className="d-flex justify-content-start">Last name:&nbsp;<span>{profile.lastName}</span></h3>
                                    <h3 className="d-flex justify-content-start">Country:&nbsp;<span>{profile.country}</span></h3>
                                    {profile.isStudent
                                        ?
                                        <h3 className="d-flex justify-content-start">Type:&nbsp;<span>Student</span></h3>
                                        :
                                        <h3 className="d-flex justify-content-start">Type:&nbsp;<span>Teacher</span></h3>}

                                </div>
                                :
                                <div hidden >
                                    <h3>First name:<span>{profile.firstName}</span></h3>
                                    <h3>Last name:<span>{profile.lastName}</span></h3>
                                    <h3>Country:<span>{profile.country}</span></h3>
                                    {profile.isStudent
                                        ?
                                        <h3>Type:<span>Student</span></h3>
                                        :
                                        <h3>Type:<span>Teacher</span></h3>}

                                </div>


                            }
                        </div>
                    </div>
                )
            }


        })
    )
}



export default Profiles;