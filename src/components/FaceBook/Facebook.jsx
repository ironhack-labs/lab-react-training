// import profiles from './data/berlin.json';
import profiles from './../../data/berlin.json'
import './Facebook.css'

const Facebook = () => {
    return (
        <div className='container'>
            {
                profiles.map((elm, index) => {
                    return (
                        <div key={index}>
                            <img src={elm.img} alt={elm.firstName} />
                            <p>First Name: {elm.firstName}</p>
                            <p>Last Name: {elm.lastName}</p>
                            <p>Country: {elm.country}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Facebook