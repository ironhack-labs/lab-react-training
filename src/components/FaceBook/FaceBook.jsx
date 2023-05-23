import profiles from '../../data/berlin.json'
import './Facebook.css'

const FaceBook = () => {



    return (
        profiles.map(elm => {
            return (
                <div className='Info'>
                    <div>
                        <img src={elm.img} alt='hello there' style={{ width: '100px' }} />
                    </div>
                    <div >
                        <p>First Name: {elm.firstName} </p>
                        <p>Last Name: {elm.lastName} </p>
                        <p> Country:{elm.country} </p>
                        <p>Type: {elm.isStudent ? 'Student' : 'Not student'} </p>
                    </div>
                </div>
            )
        })
    )
}

export default FaceBook