import './FaceBook.css'
import { useState } from 'react'
import profilesData from './../../data/berlin.json'

const FaceBook = () => {

    const [profiles, setProfiles] = useState(profilesData)
    const [country, setCountry] = useState('')

    const changeBackground = event => {
        const { value } = event.target
        setCountry(value)
        console.log(country)
    }

    return (
        <>
            <button value='' onClick={changeBackground}>All</button>
            <button value='England' onClick={changeBackground}>England</button>
            <button value='USA' onClick={changeBackground}>USA</button>
            <button value='Malaysia' onClick={changeBackground}>Malaysia</button>
            <button value='Germany' onClick={changeBackground}>Germany</button>
            {
                profiles.map(e => {
                    return (<div className={`card ${e.country === country && 'blue'}`}>
                        <div className='cardImage'>
                            <img src={e.img} alt={e.firstName} />
                        </div>
                        <ul>
                            <li><p>First Name: {e.firstName}</p></li>
                            <li><p>Last Name: {e.lastName}</p></li>
                            <li><p>Country: {e.country}</p></li>
                            <li><p>Type: {e.isStudent ? 'Student' : 'Teacher'}</p></li>
                        </ul>
                    </div>)
                })
            }
        </>
    )

}

export default FaceBook