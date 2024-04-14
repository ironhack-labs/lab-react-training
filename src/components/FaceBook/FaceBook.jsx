import profiles from "../../data/berlin.json";
import { useState } from "react";
import "./FaceBook.css";

function FaceBook() {
    const [selectedCountry, setSelectedCountry] = useState("");

    const handleChangeBackground = (e) => {
        const country = e.target.name;
        console.log(country);
        
        
        setSelectedCountry(country);
    };

    return (
        <>
            <div className="container mb-2">
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" onClick={handleChangeBackground} name="England" className="btn btn-secondary">England</button>
                    <button type="button" onClick={handleChangeBackground} name="USA" className="btn btn-secondary">Usa</button>
                    <button type="button" onClick={handleChangeBackground} name="Malaysia" className="btn btn-secondary">Malaysia</button>
                    <button type="button" onClick={handleChangeBackground} name="All" className="btn btn-secondary">All</button>
                </div>
            </div>

            <div className="row">
                {profiles.map((profile, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={profile.img} className="card-img mt-4" alt="Profile" />
                                </div>
                                <div className="col-md-8">
                                    <div className={`card-body ${selectedCountry === "All" ? "inactive" : ""} ${profile.country === selectedCountry  ? "inactive" : ""}`}>
                                        <p className="card-title"><strong>First name:</strong> {profile.firstName}</p>
                                        <p className="card-text"><strong>Last name:</strong> {profile.lastName}</p>
                                        <p className="card-text"> <strong>Country:</strong> {profile.country}</p>
                                        <p className="card-text"><strong>Type: </strong>{profile.isStudent ? "Student" : "Teacher"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FaceBook;
