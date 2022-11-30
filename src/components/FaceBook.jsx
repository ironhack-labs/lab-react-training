import './FaceBook.css'
import profiles from './../data/berlin.json'


const FaceBook = () => {

    // const [profiles, setProfiles] = useState(profiles)
    return (
        <section>
            <h1>Profiles List</h1>
            {profiles.map(elm => {
                return (
                    <section className='profileCard'>
                        <div key={elm._id}>
                            <img src={elm.img}></img>
                            <h3>{elm.firstName}</h3>
                            <p> {elm.lastName}</p>
                            <p> {elm.country}</p>
                        </div>
                    </section>
                )
            })}
        </section>
    )
}
export default FaceBook

