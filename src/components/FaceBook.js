import { useState } from 'react';
import profiles from '../data/berlin.json'
import { nanoid } from 'nanoid';
import { Profile } from './Profile';
import { MenuButton } from './MenuButton';

export function FaceBook(){
    const [country, setCountry] = useState("All")
    const [activeButton, setActiveButton] = useState("All");
    const [profileArray, setProfiles] = useState(profiles)

   function sortAlphAscending(){
    const sortedProfiles = [...profileArray].sort((a,b) => a.firstName.localeCompare(b.firstName));
    setProfiles(sortedProfiles)
   }

   function sortAlphDescending(){
    const sortedProfiles = [...profileArray].sort((a,b) => b.firstName.localeCompare(a.firstName));
    setProfiles(sortedProfiles)
   }

   function SearchProfile(input){
    const search = input.target.value;
    if(search.length === 0){
      setProfiles(profiles);
    }else{
    const results = profiles.filter((item) => item.firstName.toLowerCase().includes(search) || item.lastName.toLowerCase().includes(search))
    setProfiles(results)
    }
   }

   return(
    <div className='d-flex flex-column gap-3'>
    <div className='d-flex flex-column align-items-center'>
    <div>
      <MenuButton country={"country"} setCountry={setCountry} activeButton={activeButton} setActiveButton={setActiveButton} name='All' />
      <MenuButton country={"country"}  setCountry={setCountry} activeButton={activeButton} setActiveButton={setActiveButton}  name='England' />
      <MenuButton country={"country"}  setCountry={setCountry} activeButton={activeButton} setActiveButton={setActiveButton} name='USA' />
      <MenuButton country={"country"}  setCountry={setCountry} activeButton={activeButton} setActiveButton={setActiveButton} name='Malaysia'/>
      <MenuButton country={"country"}  setCountry={setCountry} activeButton={activeButton} setActiveButton={setActiveButton} name='Germany' />
      <MenuButton country={"country"}  setCountry={setCountry} activeButton={activeButton} setActiveButton={setActiveButton} name='Other' />
      
      <div className="dropdown d-inline position-relative">
  <button className='btn border-dark rounded-1' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Sort
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <button onClick={sortAlphAscending} className='btn btn-light d-block px-4'>A-Z</button>
  <button onClick={sortAlphDescending} className='btn btn-light d-block px-4'>Z-A</button>
  </ul>
</div>
<div className='d-flex justify-content-center position-relative' style={{maxWidth: "500px"}}>
  <input onChange={(event) => SearchProfile(event)} className='form-control' type="text" />
  <button onClick={SearchProfile} className='btn btn-light border border-dark'>Search</button>
</div>
</div>
    </div>
        {profileArray.map((profile) => {
            return(
             <div key={nanoid()}>
                <Profile countries={country} firstName={profile.firstName} lastName={profile.lastName} country={profile.country} isStudent={profile.isStudent} img={profile.img} />
             </div>
            );
        })}
    </div>
   );
}