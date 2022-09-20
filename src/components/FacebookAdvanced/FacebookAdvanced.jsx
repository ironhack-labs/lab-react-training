import profiles from '../../data/berlin.json';
import { useState } from 'react';

function FacebookAdvanced() {
    const [countryProfiles, setCountry] = useState(profiles);

    const handleCountryChange = (event) => {
        console.log(event.target.value);
        const newList = filterByCountry(event.target.value);
        setCountry(newList);
    }

    const filterByCountry = (country) => {
        if (country === 'All') {
            return profiles;
        } else {
            return profiles.filter((profile) => {
                return profile.country === country;
            });
        }
    }
    
    return (
        <div>
            <div className="facebook-advanced">
                <div className="facebook-advanced-filter">
                    <label htmlFor="country">Filter by country: </label>
                    <button onClick={handleCountryChange} value="All">All</button>
                    <button onClick={handleCountryChange} value="Germany">Germany</button>
                    <button onClick={handleCountryChange} value="USA">USA</button>
                    <button onClick={handleCountryChange} value="Malaysia">Malaysia</button>
                    <button onClick={handleCountryChange} value="England">England</button>
                    <button onClick={handleCountryChange} value="France">France</button>
                    <button onClick={handleCountryChange} value="Nigeria">Nigeria</button>
                    <button onClick={handleCountryChange} value="Norway">Norway</button>
                    <button onClick={handleCountryChange} value="Italy">Italy</button>
                    <button onClick={handleCountryChange} value="Turkey">Turkey</button>
                    <button onClick={handleCountryChange} value="Brazil">Brazil</button>
                    <button onClick={handleCountryChange} value="Israel">Israel</button>
                    <button onClick={handleCountryChange} value="Catalonia">Catalonia</button>
                    {/* <select name="country" id="country" onChange={handleCountryChange}>
                        <option value="All">All</option>
                        <option value="Germany">Germany</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="France">France</option>
                    </select> */}
                </div>
            </div>

            {countryProfiles.map((profile, i) => {
                return (
                    <div className="facebook" key={i}>
                        <div className="facebook-profile id-card border">
                            <img src={profile.img} alt="profile" className='facebook-profile-img' />
                            <div className="facebook-info">
                                <p>
                                    <strong>First name:</strong> {profile.firstName}
                                </p>
                                <p>
                                    <strong>Last name:</strong> {profile.lastName}
                                </p>
                                <p>
                                    <strong>Country:</strong> {profile.country}
                                </p>
                                <p>
                                    <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default FacebookAdvanced;