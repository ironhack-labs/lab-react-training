import { useState } from "react";
import profiles from "../../data/berlin.json";

const FaceBook = () => {
  const countries = profiles.map((i) => i.country);
  const uniqueCountries = Array.from(new Set(countries.map((a) => a))).map(
    (country2) => countries.find((a) => a === country2)
  );
  // COUNTRIES
  const [filterCountry, setFilterCountry] = useState("");
  // SEARCH
  const [search, setSearch] = useState("");
  // SORT LAST NAME
  const [sortLastName, setSortLastName] = useState(false);

  const filterProfiles = () => {
    let filteredProfiles = profiles;
    // COUNTRIES
    if (filterCountry !== "") {
      filteredProfiles = profiles.map((infoProfile) => ({
        ...infoProfile,
        isFind: infoProfile.country === filterCountry,
      }));
    }
    // SEARCH
    if (search !== "") {
      filteredProfiles = filteredProfiles.filter((i) =>
        i.firstName.toLowerCase().includes(search.toLowerCase())
      );
    }
    // SORT LAST NAME
    if (sortLastName) {
      filteredProfiles = filteredProfiles
        .slice()
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
    }

    return filteredProfiles;
  };

  const filteredProfiles = filterProfiles();

  return (
    <>
      <div className="d-flex form-home justify-content-center">
        <input
          className="form-control me-2 mb-1"
          style={{ width: "300px" }}
          type="text"
          placeholder="Search First Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className={`border mb-1 ${
            sortLastName ? "btn btn-info" : " btn btn-light"
          }`}
          onClick={() => {
            setSortLastName(!sortLastName);
          }}
        >
          Sort Last Name
        </button>
      </div>
      {/* // COUNTRIES */}
      <button
        onClick={() => setFilterCountry("")}
        style={{ marginRight: "2px" }}
      >
        All
      </button>
      {uniqueCountries.map((i) => {
        return (
          <button
            key={i}
            onClick={() => setFilterCountry(i)}
            style={{
              marginRight: "2px",
              backgroundColor: i === filterCountry ? "#61dafb" : "",
            }}
          >
            {i}
          </button>
        );
      })}
      {/* // PEOPLE CARDS */}
      <div className="d-flex flex-column align-items-center">
        {filteredProfiles.map((i) => (
          <div
            key={i.firstName}
            className="border border-2 border-black d-flex flex-wrap p-2 mb-2"
            style={{
              width: "1000px",
              backgroundColor: i.isFind ? "#61dafb" : "",
            }}
          >
            {/* IMG */}
            <div>
              <img
                src={i.img}
                alt={`Picture ${i.firstName}`}
                className="card-img-top object-fit-cover"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            {/* INFO */}
            <div className="text-start mx-2">
              <p className="m-0">
                <strong>First Name</strong>: {i.firstName}
              </p>
              <p className="m-0">
                <strong>Last Name</strong>: {i.lastName}
              </p>
              <p className="m-0">
                <strong>Country</strong>: {i.country}
              </p>
              <p className="m-0">
                <strong>Type</strong>: {i.isStudent ? "Student" : "Teacher"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FaceBook;
