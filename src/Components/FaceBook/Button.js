import { useState } from "react"

export default function Button({country, getClickedCountry}) {

    const [isClicked, toggleClicked] = useState(false)

    function handleClick(){
        toggleClicked(!isClicked)
        getClickedCountry(country)
    }

    return (
        <button onClick={handleClick} style={isClicked ? {backgroundColor:"red"}: {backgroundColor:"white"}}>{country}</button>
    )
}