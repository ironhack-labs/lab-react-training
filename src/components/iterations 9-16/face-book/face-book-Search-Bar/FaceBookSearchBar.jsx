import React from 'react'

function FaceBookSearchBar({ onSearch, onSort }) {
    const handleSearchChange = (event) => {
        console.log(event);
        const { value } = event.target;
        onSearch(value);
    };

    const handleDescSort = () => onSort("desc");
    const handleAscSort = () => onSort("asc");

    return (
        <div className="input-group border border-secondary">
            <label htmlFor='search' className="input-group-text">🔍</label>
            <input 
                type="text"
                name="search"
                id='search'
                className="form-control"
                placeholder="Search"
                onChange={handleSearchChange}
            />
            <button className="input-group-text" onClick={handleDescSort} >▼</button>
            <button className="input-group-text" onClick={handleAscSort} >▲</button>
        </div>
    )
}

export default FaceBookSearchBar;
