import React from 'react'

function FaceBookCountryFilter({ country, selection, onFilter }) {
    return (
        <button 
          className="fs-5 px-2" 
          style={ country === selection ? { backgroundColor: "#6b9aff" } : { backgroundColor: "white" } } 
          onClick={() => onFilter(country)} 
        >
            { country }
        </button>
    )
};

export default FaceBookCountryFilter;
