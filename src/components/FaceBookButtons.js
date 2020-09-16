import React, {useState} from 'react'


function FaceBookButtons() {

    const [country,setCountry] = useState("")

    const countries = [
        "USA",
        "Malasyia",
        "Germany",
        "Nigeria",
        "Italy",
        "Scotland",
        "Kazakhstan",
        "Russia",
        "Catalonia",
        "France",
        "Israel",
        "Brazil",    
        "Sweden",
        "Taiwan",
        "Turkey",
        "Norway"
    ]
    

    function colorPicker(country){
        setCountry(country)
    }

    return (
        <div>
            {/* {countries.map((el,i) => {
             return(
                 <button key={i} onClick={colorPicker(country)}>{el}</button>
             )
            }
            )}
            <button>{country}</button>             */}
        </div>
    )
}

export default FaceBookButtons
