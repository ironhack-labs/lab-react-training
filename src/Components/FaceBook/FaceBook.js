import profiles  from '../../data/berlin.json'
import Profile from './Profile'
import Button from './Button'
import { useState } from 'react'
import countriesArr from '../../data/countries.json'

export default function FaceBook() {

    const [clickedCountry, setClickedCountry] = useState("")
    const [allClicked, setAllClicked] = useState(false)

    function getClickedButton(country) {
        setClickedCountry(country)
    }
    function handleAllClick(){
        setAllClicked(!allClicked)
    }

    let backgroundColor = allClicked ? {backgroundColor:"red"} : {backgroundColor:"white"}

    return ( 

        <>
        <div>
            <button onClick={handleAllClick} style={backgroundColor}>All</button>
        {   
            countriesArr.map((element, index) => {
               return (
                   <Button country={element} getClickedCountry={getClickedButton} key={index} />
              )
         })
        }
        </div>
        
        {
            profiles.map((profileData,index) => {
                return (
                    <Profile style={backgroundColor} data={profileData} allClicked={allClicked} clickedCountry={clickedCountry} key={index}/>
                )  
            })
        }
        </>

    )
}