import { useState } from "react"
import profiles from '../../data/berlin.json'

const FaceBook = () => {

    const [selectedCountry, setSelectedCountry] = useState('')

    const changeColor = (country) => {
        setSelectedCountry(country);
    }

    return (
        <section>
            <button onClick={() => changeColor('All')}>All</button>
            <button onClick={() => changeColor('England')}>England</button>
            <button onClick={() => changeColor('USA')}>USA</button>
            <button onClick={() => changeColor('Malaysia')}>Malaysia</button>
            <button onClick={() => changeColor('Germany')}>Germany</button>
            {
                profiles.map(({ firstName, lastName, country, img, isStudent }) => {

                    let type = 'Student'
                    if (!isStudent) type = 'Teacher'

                    let profileColor = selectedCountry === '' && 'white'
                    if (selectedCountry === country) {
                        profileColor = 'green';
                    }
                    return (
                        <div className='uniqueProfile' style={{ backgroundColor: profileColor }}>
                            <div>
                                <img src={img} alt="profile-image" />
                            </div>
                            <div>
                                <h3>First name: {firstName}</h3>
                                <h3>Last name: {lastName}</h3>
                                <h3>country: {country}</h3>
                                <h3>type: {type}</h3>
                            </div>
                        </div>

                    )
                })
            }
        </section>
    )
}

export default FaceBook