import { useState } from "react";
import profiles from "../data/berlin.json";

function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [expandedProfileIndex, setExpandedProfileIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const uniqueCountries = [
    ...new Set(profiles.map((profile) => profile.country)),
  ];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleImageClick = (index) => {
    setExpandedProfileIndex(expandedProfileIndex === index ? null : index);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [sortOrder, setSortOrder] = useState("");

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const sortedProfiles = [...filteredProfiles].sort((a, b) => {
    if (sortOrder === "firstName") {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortOrder === "lastName") {
      return a.lastName.localeCompare(b.lastName);
    } else if (sortOrder === "country") {
      return a.country.localeCompare(b.country);
    }
    return 0;
  });

  return (
    <div className="p-4">
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search by name or country"
      className="border p-2 mb-4 w-full"
    />
    <div className="flex flex-wrap mb-4">
      {uniqueCountries.map(country => (
        <button
          key={country}
          onClick={() => handleCountryClick(country)}
          className={`p-2 m-2 border ${selectedCountry === country ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          {country}
        </button>
      ))}
    </div>
    <div className="flex flex-wrap mb-4">
      <button onClick={() => handleSort('firstName')} className="p-2 m-2 border bg-white">Sort by First Name</button>
      <button onClick={() => handleSort('lastName')} className="p-2 m-2 border bg-white">Sort by Last Name</button>
      <button onClick={() => handleSort('country')} className="p-2 m-2 border bg-white">Sort by Country</button>
    </div>
    {sortedProfiles.map((profile, index) => (
      <div
        key={index}
        className={`flex items-center border p-4 mb-4 shadow rounded ${selectedCountry === profile.country ? 'bg-blue-100' : 'bg-white'}`}
      >
        <img
          src={profile.img}
          alt={`${profile.firstName} ${profile.lastName}`}
          className="w-16 h-16 rounded-full mr-4 cursor-pointer"
          onClick={() => handleImageClick(index)}
        />
        <div>
          <p><strong>First name:</strong> {profile.firstName}</p>
          <p><strong>Last name:</strong> {profile.lastName}</p>
          {expandedProfileIndex === index && (
            <>
              <p><strong>Country:</strong> {profile.country}</p>
              <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
            </>
          )}
        </div>
      </div>
    ))}
  </div>
  );
}

export default FaceBook;
