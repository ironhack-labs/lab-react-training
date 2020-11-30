import React, {useState} from 'react'
import profiles from '../data/berlin.json';

export default function FaceBook(){
  let fbprofiles = [...profiles]

  let countriesArray = []
  profiles.forEach(ele => {
    if (!countriesArray.includes(ele.country)) {
      countriesArray.push(ele.country)
    } 
  }) 

  const [countries, setCountries] = useState(countriesArray.slice(0,5))
  const [expanded, setExpanded] = useState(false)
  const [filterQuery, setFilterQuery] = useState('All')
  const [profileList, setProfileList] = useState(profiles)

  function countriesList(){
    if (expanded === false){
      setExpanded(true)
      setCountries(countriesArray)
      console.log(`expanded: ${countriesArray}`)
    } else {
      setExpanded(false)
      setCountries(countriesArray.slice(0,5))
      console.log(`not expanded: ${countriesArray}`)
    }
  }
  
  function filter(query){
    if (query === 'All'){
      setProfileList(fbprofiles)
    } else {
      setProfileList(fbprofiles.filter(({country}) => country === query))
    }
    console.log(profileList)
    setFilterQuery(query)
    console.log(query)
  }

  function activeButtonColor(query){
    if (filterQuery === query){
      return '#e3e3e3'
    } else {
      return 'white'
    }
  }

  return (
    <div style={{width: '400px'}}>

      <div className='Filter-Buttons'>
        <button onClick={()=>filter('All')} style={{backgroundColor:`${activeButtonColor('All')}`}}>All</button>

        {countries.map(e => (
          <button key={e} onClick={()=>filter(e)} style={{border: '2px solid grey', backgroundColor:`${activeButtonColor(e)}`}}>{e}</button>
        ))}

        <button onClick={countriesList}style={{backgroundColor: '#e3e3e3'}}>{!expanded ? '...' : 'Less '}</button>
      </div>
      

      <div className='Profiles'>
        {profileList.map((profile, i) => (
          <div key={i} style={{border: '2px solid black', display:'flex', flexDirection:'row', marginBottom: '20px'}}>
            <div>
              <img src={profile.img} alt="" style={{height:'100px', margin: '5px'}}/>
            </div>
            <div style={{lineHeight: '2px'}}>
              <p><strong>First name: </strong> {profile.firstName}</p>
              <p><strong>Last name: </strong> {profile.lastName}</p>
              <p><strong>Country: </strong> {profile.country}</p>
              <p><strong>Type: </strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}