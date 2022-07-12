import profiles from './../../data/berlin.json';
import "./FaceBook.css"


const FaceBook = () => {
    // const countriesArr = profiles.map(profile => profile.country)
    // const filteredCountriesArr = countriesArr.filter
    // console.log(countriesArr)
    const profileData = profiles.map(profile => {
        return <>
            <div className="faceCard">
                <img src={profile.img} className='faceImg' />

                <footer>

                    <p><b>First Name:</b> {profile.firstName}</p>
                    <p><b>Last Name: </b> {profile.lastName}</p>
                    <p><b>Country: </b> {profile.country}</p>
                    <p><b>Type: </b> {profile.isStudent ? 'Student' : 'Teacher'}</p>


                </footer>
            </div>
        </>
    })
    return (
        <article className="faceCards">
            {profileData}



        </article>
    )
}


export default FaceBook;