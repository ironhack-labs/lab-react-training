import { useState } from 'react'
import profiles from '../data/berlin.json'

const Facebook = () => {

    const [color, setColor] = useState('white')

    const divStyle = {
        backgroundColor: `${color}`
    }


    return (
        <>
            <button onClick={() => {
                contact.country === 'USA' ? setColor('blue') : setColor('white')
            }}>USA</button>
            <button onClick={() => setColor(color)}>England</button>
            <button onClick={() => setColor(color)}>Germany</button>
            <button onClick={() => setColor(color)}>Catalonia</button>
            {
                profiles.map((contact, idx) => {
                    return (
                        <div style={divStyle} key={idx} className='card'>
                            <img src={contact.img} alt="profile-pic" />
                            <div>
                                <span><b>First Name</b>{contact.firstName}</span>
                                <br />
                                <span><b>Last Name</b>{contact.lastName}</span>
                                <br />
                                <span><b>Country</b>{contact.country}</span>
                                <br />
                                {contact.isStudent ? <span><b>Type:</b>Student</span> : <span><b>Type:</b>Teacher</span>}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Facebook