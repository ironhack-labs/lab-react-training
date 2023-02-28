import profiles from '../../data/berlin.json'
import './Facebook.css'

const Facebook = () => {



    return (
        profiles.map(elm => {


            return (
                < div className="facebookCard" >
                    <div className="picture">
                        <img src={elm.img} alt={elm.firstName} />
                    </div>
                    <div className="fbInfo">
                        <p><strong>First name:</strong> {elm.firstName}</p>
                        <p><strong>Last name:</strong> {elm.lastName}</p>
                        <p><strong>Country:</strong> {elm.country}</p>
                        <p><strong>Type:</strong> {elm.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </div >
            )
        })
    )
}

export default Facebook