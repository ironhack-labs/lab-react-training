import { useState } from "react";

function ProfileSearch(props) {

    const [searchText, setSearchText] = useState('')
    
    const { refreshFilteredList}=props

    const handleChange= (e)=>{
        setSearchText(e.target.value)
        refreshFilteredList(e.target.value)
    }


    return (
        <div d-flex justify-content-center >
            <h4>Search by Name: &nbsp;</h4>
            <input class="form-control mb-5" onChange={handleChange} value={searchText} style={{width:600, display:"inline"}}></input>
        </div>
    )

}

export default ProfileSearch;