import React from 'react';

const SearchBar = ({searchTerm}) => {

  const [searchInput, setSearchInput] = React.useState("");

  const handleSearch = ({target}) => {
    console.log(target.value)
    setSearchInput(target.value); //update the state
    // call the function that points to the parent function, giving the target.value
    searchTerm(target.value); // we passed the whole value --> ex: karla
  }

  return (
    <div>
    <label> Search
      <input 
        type="text" 
        placeholder="Type a name"
        value={searchInput}
        onChange={handleSearch}
      />
    </label>

    </div>
  )
}

export default SearchBar;