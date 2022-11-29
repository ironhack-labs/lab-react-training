import { useState } from 'react';
import profiles from '../../data/berlin.json';
import './FaceBook.css';

const FaceBook = () => {

    const [map, setMap] = useState(profiles);

    const facebookMap = map.map((profile, i) => {

        return (
            <div key={i} className='facebook-container'>
                <div>
                    <img src={profile.img} alt={profile.img} />
                </div>
                <div>
                    <p>First Name: {profile.firstName}</p>
                    <p>Last Name: {profile.lastName}</p>
                    <p>Country: {profile.country}</p>
                    <p>Type: {profile.isStudent ? "Student" : "Teacher"}</p>
                </div>
            </div>
        )

    });

    const handleClick = (country) => {
        let newMap = profiles;
        if (country !== "All") {
            newMap = profiles.filter(profile => profile.country === country);
        }

        setMap(newMap);
    }

    return (
        <div>
            <button onClick={() => handleClick("All")}>All</button>
            <button onClick={() => handleClick("Malaysia")}>Malaysia</button>
            <button onClick={() => handleClick("USA")}>USA</button>
            <button onClick={() => handleClick("England")}>England</button>
            <button onClick={() => handleClick("Germany")}>Germany</button>

            {
                facebookMap
            }
        </div>

    )
}

export default FaceBook;