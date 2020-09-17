import React, {useState} from 'react'
import profiles from '../data/berlin.json'

function Facebook() {
    const [feed, setfeed] = useState(profiles)

    let styles = {
        visibility: 'visible'
    }

    const sortProfiles = (country) => {
        switch (country){
            case 'All':
                return setfeed(profiles)
            case 'England':
                return setfeed(profiles.filter(el => el.country === 'England'))
            case 'Malaysia':
                return setfeed(profiles.filter(el => el.country === 'Malaysia'))
            case 'Germany':
                return setfeed(profiles.filter(el => el.country === 'Germany'))
            case 'Nigeria':
                return setfeed(profiles.filter(el => el.country === 'Nigeria'))
            case 'USA':
                return setfeed(profiles.filter(el => el.country === 'USA'))
            case 'Sweden':
                return setfeed(profiles.filter(el => el.country === 'Sweden'))
            case 'Scotland':
                return setfeed(profiles.filter(el => el.country === 'Scotland'))
            case 'Kazakhstan':
                return setfeed(profiles.filter(el => el.country === 'Kazakhstan'))
            case 'Catalonia':
                return setfeed(profiles.filter(el => el.country === 'Catalonia'))
            case 'France':
                return setfeed(profiles.filter(el => el.country === 'France'))
            case 'Israel':
                return setfeed(profiles.filter(el => el.country === 'Israel'))
            case 'Brazil':
                return setfeed(profiles.filter(el => el.country === 'Brazil'))
            case 'Taiwan':
                return setfeed(profiles.filter(el => el.country === 'Taiwan'))
            case 'Norway':
                return setfeed(profiles.filter(el => el.country === 'Norway'))
            default: 
                return setfeed(profiles)
        }
    }


    return (
        <div>
        <div className='buttons'>
            <button onClick={() => sortProfiles('All')}>All</button>
            <button onClick={() => sortProfiles('England')}>England</button>
            <button onClick={() => sortProfiles('Malaysia')}>Malaysia</button>
            <button onClick={() => sortProfiles('Germany')}>Germany</button>
            <button onClick={() => sortProfiles('Nigeria')}>Nigeria</button>
            <button onClick={() => sortProfiles('USA')}>USA</button>
            <button onClick={() => sortProfiles('Sweden')}>Sweden</button>
            <button onClick={() => sortProfiles('Scotland')}>Scotland</button>
            <button onClick={() => sortProfiles('Kazakhstan')}>Kazakhstan</button>
            <button onClick={() => sortProfiles('Catalonia')}>Catalonia</button>
            <button onClick={() => sortProfiles('France')}>France</button>
            <button onClick={() => sortProfiles('Israel')}>Israel</button>
            <button onClick={() => sortProfiles('Brazil')}>Brazil</button>
            <button onClick={() => sortProfiles('Taiwan')}>Taiwan</button>
            <button onClick={() => sortProfiles('Norway')}>Norway</button>
        </div>
            {feed.map((el, ind) => (
                <div key={ind} style={{backgroundColor: el.country === 'USA' ? 'aquamarine': 'white'}} className="IdCard box">
                    <div>
                        <img className='facebookPicture' src={el.img} alt=""/>
                    </div>
                    <div style={styles}>
                        <p><strong>First Name: </strong>{el.firstName}</p>
                        <p><strong>Last Name: </strong>{el.lastName}</p>
                        <p><strong>Country: </strong>{el.country}</p>
                        <p><strong>Type: </strong>{el.isStudent ? 'Student': "Teacher"}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Facebook
