import { v4 as uuidv4 } from 'uuid';
import profiles from "../../data/berlin.json";
import { useState } from 'react';

function FaceBook() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showDetails, setShowDetails] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProfiles = profiles
        .filter(profile => selectedCountry ? profile.country === selectedCountry : true)
        .filter(profile => profile.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || profile.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => sortBy === 'asc' ? a.firstName.localeCompare(b.firstName) : sortBy === 'desc' ? b.firstName.localeCompare(a.firstName) : 0);

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        setShowDetails(null);
    };
    const handleProfileClick = (id) => {
        setShowDetails(showDetails === id ? null : id);
    };

    const handleSortClick = (order) => {
        setSortBy(order);
    };


    return (
        <div>
            <div>
                {profiles.map((profile) => (
                    <div key={uuidv4()} style={{ backgroundColor: selectedCountry === profile.country ? 'blue' : 'transparent' }}>
                        <img src={profile.img} alt="" style={{ width: '200px' }} onClick={() => handleProfileClick(profile.id)} />
                        <p>First Name: {profile.firstName}</p>
                        <p>Last Name: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>Type: {profile.isStudent ? "Student" : "Teacher"}</p>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={() => handleSortClick('asc')}>Sort A-Z</button>
                <button onClick={() => handleSortClick('desc')}>Sort Z-A</button>
            </div>
            <div>
                <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
        </div>
    );
}

export default FaceBook;
