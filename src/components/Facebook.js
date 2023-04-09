import jsonProfiles from '../data/berlin.json';
import { useState } from "react";
import Profiles from './Profiles';
import Buttons from './Buttons';
import ProfileSearch from './ProfileSearch';
import SortButtons from './SortButtons';



function Facebook() {

    const [profilesArr, setProfilesArr] = useState([...jsonProfiles])
    const [filteredProfiles, setFilteredProfiles] = useState([...jsonProfiles])

    const [countryToHighlight, setCountryToHighlight] = useState('unset')

    const [detailsToShow, setDetails] = useState('unset')

    let highlightFunction = (event) => {
        if(event.target.innerHTML === countryToHighlight){
            setCountryToHighlight('unset')
        }
        else{
            let country = event.target.innerHTML
            setCountryToHighlight(country)
        }
        
    }

    const refreshFilteredList= (searchText) => {
        if(searchText===""){
            setFilteredProfiles(profilesArr)
        }
        else{
            const filteredArray = profilesArr.filter((profile)=>{
                return `${profile.firstName} ${profile.lastName}`.toUpperCase().startsWith(searchText.toUpperCase())
            })
            setFilteredProfiles(filteredArray)
        }
    }

    let highlightAll = () => {
        if(countryToHighlight==='allCountries'){
            setCountryToHighlight('unset')
        }
        else{
            setCountryToHighlight('allCountries')
        }
        
    }

    let showImageClicked = (event) => {
        if(event.target.src===detailsToShow){
            setDetails('unset')
        }
        else {
            setDetails(event.target.src)
        }
        
    }

    let sortByCountry = () => {
        let sortedProfiles = profilesArr.sort((a, b) => a.country.localeCompare(b.country))
        setFilteredProfiles([...sortedProfiles])
        return [...sortedProfiles]
    }


    const uniqueCountriesArr = profilesArr.map((item) => item.country).filter((value, index, self) => self.indexOf(value) === index);

    return (
        <div>
            <button class="btn btn-light m-3" onClick={()=>window.location.reload(false)}>Refresh List</button>
            <Buttons variant="danger" id='btn1' highlightAll={highlightAll} countryToHighlight={countryToHighlight} />
            <Buttons variant="danger" uniqueCountriesArr={uniqueCountriesArr} profilesArr={profilesArr} id='btn2' highlightFunction={highlightFunction} countryToHighlight={countryToHighlight} />
            <SortButtons sortByCountry={sortByCountry} />
            <ProfileSearch refreshFilteredList={refreshFilteredList} />
            <Profiles  filteredProfiles={filteredProfiles} countryToHighlight={countryToHighlight} showImageClicked={showImageClicked} detailsToShow={detailsToShow} />
            <br></br>
            <br></br>
         
        </div>



    )
}

export default Facebook