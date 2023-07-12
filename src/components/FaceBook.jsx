import { useState } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
    const [country, setCountry] = useState('...');

    return (
        <div style={{width: "350px "}}>
            <div>
                <button onClick={() => setCountry('All')}>All</button>
                <button onClick={() => setCountry('England')}>England</button>
                <button onClick={() => setCountry('USA')}>USA</button>
                <button onClick={() => setCountry('Malaysia')}>Malaysia</button>
                <button onClick={() => setCountry('Germany')}>Germany</button>
                <button onClick={() => setCountry('...')}>...</button>
            </div>
            {profiles.map((profile) => {
                let bgColor = 'white';

                if (country === profile.country || country === 'All') {
                    bgColor = 'blue';
                }

                return (
                    <div className="card" key={profile.firstName}>
                        <div className="row" style={{ backgroundColor: bgColor }}>
                            <div className="col-4">
                                <img src={profile.img} alt="broken img" style={{ width: '70px' }} />
                            </div>
                            <div className="col">
                                <p><b>First name:</b> {profile.firstName}</p>
                                <p><b>Last name:</b> {profile.lastName}</p>
                                <p><b>Country:</b> {profile.country}</p>
                                <p><b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default FaceBook;
