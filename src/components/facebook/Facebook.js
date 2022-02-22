import './Facebook.css'
import profiles from './../../data/berlin.json';

const Facebook = () => {

    console.log(profiles)


    return (
        <>
            {
                profiles.map((elm, idx) => {
                    return (
                        <div key={idx} className='idCard'>
                            <img src={elm.img}></img>
                            <div className='dates'>
                                <p><strong>First Name:</strong> {elm.firstName}</p>
                                <p><strong>Last Name:</strong> {elm.lastName}</p>
                                <p><strong>Country:</strong> {elm.country}</p>
                                <p><strong>Type:</strong> {elm.isStudent? 'Student': 'Pofessor'}</p>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Facebook