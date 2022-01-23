import React from 'react';
import data from "../../data/berlin.json";
import "./Facebook.css";
import SearchBar from '../SearchBar/SearchBar';



const Facebook = () => {
  // States
  // state to control the profiles to show
  const [profiles, setProfiles] = React.useState(data);


  // display profile info
  const [displayProfileInfo, setDisplayProfileInfo] = React.useState(false)

  // state to control the current country
  const [country, setCountry] = React.useState("");

  // state to search input
  const [searchTerm, setSearchterm] = React.useState("");


  // eliminate duplicates -> make a copy with the countries
  const countries = data.map(item => item.country);
  // eliminate duplicates
  let uniqueCountries = [...new Set(countries)];

  // to handle coutry buttons

  const countryStyle = "selectedCountry";
  const displayInfo = "displayInfo";

  //function to filter

  // const handleBackProfile = (country) => {
  //   //console.log('country', country)
  //   //console.log(profiles)
  //   const profileFilterByCountry = profiles.filter(item=> item.country.includes(country))
  //   console.log(profileFilterByCountry)
  //   setFilterProfile(profileFilterByCountry)
  // }

  const handleCountry = ({target}) => {
    //console.log(target.textContent)
    // if click on All countries--> setCountry to empty string
    // otherwiser, set with the name of the coutry to filter later
    target.textContent === 'All countries' 
    ? setCountry("") // display all the profiles
    : setCountry(target.textContent);
  }

  const handleDisplayInfo = ({target}) => {
    console.log(target)
    //target.closest('profile-card')
    setDisplayProfileInfo(!displayProfileInfo)
  }

  // sort function
  const handleSortByName = () => {
    //console.log(profiles)
    const sorted = [...profiles].sort((a,b) => a.firstName.localeCompare(b.firstName))
    //console.log(sorted);
    setProfiles(sorted);
  }

  // - - - -  Search - - - - 
  // 1 - update state of Search with the input that comes from <SearchBar/>
  const getSearchTerm = (searchInput) => setSearchterm(searchInput);

  // 2- check if the term is included in profiles
  const checkSearchTerm = (item) => {
    //check if the term search in the input -> which is in the state -> searchTerm
    return item.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    //console.log(test)
  }
 

  // const searchCondition = (product) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase());
  const profileCards =
    profiles
      .filter(item=> item.country.includes(country))
      .map((item, index) => {
      return (
        <div key={item.lastName} className="profile-card">
          <img 
            src={item.img} 
            width="100" 
            alt={item.lastName} 
            onClick={handleDisplayInfo}
            />
           
          <div className={displayProfileInfo ? displayInfo : "profile-info"}>
            <p><strong>First name: </strong> {item.firstName}</p>
            <p><strong>Last name: </strong> {item.lastName}</p>
            <p><strong>Country: </strong> {item.country}</p>
            <p><strong>Type: </strong> {item.isStudent ? "Student" : "Teacher"}</p>
          </div>
        </div>
      )});

      // filter by search input
      const profileCardsbySearch =
      profiles
        .filter(checkSearchTerm)
        .map((item, index) => {
        return (
          <div key={item.lastName} className="profile-card">
            <img 
              src={item.img} 
              width="100" 
              alt={item.lastName} 
              onClick={handleDisplayInfo}
              />
             
            <div className={displayProfileInfo ? displayInfo : "profile-info"}>
              <p><strong>First name: </strong> {item.firstName}</p>
              <p><strong>Last name: </strong> {item.lastName}</p>
              <p><strong>Country: </strong> {item.country}</p>
              <p><strong>Type: </strong> {item.isStudent ? "Student" : "Teacher"}</p>
            </div>
          </div>
        )});
      
  
  return (
    <div>
      <div className="profile-wrapper">
        <div className="country-card">
          {uniqueCountries.map(item => {
            return (
              <button 
                key={item}
                type="button"
                onClick={handleCountry}
                className={ country === item ? countryStyle : ""}
                >{item}
              </button>
            )
          })}
          <button
            key="all"
            type="button"
            onClick={handleCountry}
            className={ country === "" ? countryStyle : ""}
          >
          All countries
          </button>
        </div>
        <button className="sortedBtn" onClick={handleSortByName}>Sort by name</button>
        <SearchBar searchTerm={getSearchTerm} />
        
        { searchTerm === "" //if the search input is empty
          ? profileCards //show the cards
          : profileCardsbySearch //show the cards to search
        }
    
    </div>
    </div>
  )
}

export default Facebook;

