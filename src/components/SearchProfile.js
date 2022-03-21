//jshint esversion:9

import { useState } from "react";

export const SearchProfile = ({filterProfiles}) => {

    const[str, setStr] = useState("");

    const handleSearch = (e) => {
        setStr(e.target.value);
        filterProfiles(e.target.value);
    };

    return (
        <div className="SearchProfile">
            <label><b>Search First Name: </b>
                <input type="text"  value={str} onChange={handleSearch}/>
            </label>
        </div>
    );
};