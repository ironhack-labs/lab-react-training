import importedProfiles from "../../../data/berlin.json";
import { useState } from "react";
import FaceBookProfile from "./face-book-profile/FaceBookProfile";
import FaceBookCountryFilter from "./face-book-country-filter/FaceBookCountryFilter";
import FaceBookSearchBar from "./face-book-Search-Bar/FaceBookSearchBar";

function FaceBook() {
    const [profiles, setProfiles] = useState(importedProfiles);

    const selection = profiles.find((profile) => profile.selected === true)

    const countries = ["All"];
    profiles.forEach( profile => {
        countries.includes(profile.country) ? "" : countries.push(profile.country);
    });

    const handleFilterCountry = (country) => setProfiles(profiles.map(profile => {
            profile.country === country ? profile.selected = true : profile.selected = false;
            return profile;
        }
    ))

    const handleSearch = (search) => setProfiles(importedProfiles.filter((profile) => profile.firstName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || profile.lastName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || profile.country.toLocaleLowerCase().includes(search.toLocaleLowerCase())));

    const handleSort = (orientation) => {
        console.log(orientation)

        {/*  ///////////////  'desc' doesn't work  ///////////////  */}

        switch(orientation) {
            case "desc":
                console.log([...profiles].sort((p1, p2) => p1.firstName.localeCompare(p2.firstName)))
                setProfiles([...profiles].sort((p1, p2) => p1.firstName.localeCompare(p2.firstName)))
                break;
            case "asc":
                console.log([...profiles].sort((p1, p2) => -1 * p1.firstName.localeCompare(p2.firstName)))
                setProfiles([...profiles].sort((p1, p2) => -1 * p1.firstName.localeCompare(p2.firstName)))
                break;
            default:
        }
        setProfiles([...profiles].sort((p1, p2) => orientation === "desc" ? 1 : -1 * p1.firstName.localeCompare(p2.firstName)))
    };

    return (
        <div className="m-3 d-flex flex-column gap-3">
            <FaceBookSearchBar
              onSearch={handleSearch}
              onSort={handleSort}
            />
            <div className="d-flex gap-1 justify-content-center flex-wrap">
                {countries.map((country) => (
                    <FaceBookCountryFilter 
                      country={country} 
                      selection={selection ? selection.country : "All"} 
                      onFilter={handleFilterCountry} key={country} 
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                {profiles.map((profile) => (
                    <FaceBookProfile 
                      profile={profile} 
                      key={profile.firstName + profile.lastName} 
                    />
                ))}
            </div>
        </div>
    )
};

export default FaceBook;
