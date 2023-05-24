import './FaceBookSimple.css'
import profiles from './../../data/berlin.json';


const FaceBook = () => {

    // const [porfs, setProfs] = useState(profiles)
    console.log(profiles)

    return (
        profiles.map((eachProf) => {
            const type = eachProf.isStudent ? 'Student' : 'Teacher'
            return (
                <div className='facebookCard'>
                    <div className='imgProf'>
                        <img src={eachProf.img} alt="" />
                    </div>
                    <div className='contentProf'>
                        <p>First Name: {eachProf.firstName} </p>
                        <p>Last Name: {eachProf.lastName} </p>
                        <p>Country: {eachProf.country} </p>
                        <p>Type: {type}</p>
                    </div>
                </div>
            )
        })
    )
}
export default FaceBook