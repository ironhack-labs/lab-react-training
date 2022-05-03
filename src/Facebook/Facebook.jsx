import profiles from '../data/berlin.json'
import './Facebook.css'
import { useState } from "react";


const Facebook = () => {


    let [colorList, setList] = useState("white")   
        

    function paintCountry(str) {

        let newColorList = ([...colorList])

        profiles.forEach((person, i) => {

            if ( str === person.country) {
                newColorList[i] = "blue"
                setList(newColorList)
            }
        })

    }

    const allCountries = profiles.map(elm => elm.country)

    const buttons = [...new Set(allCountries)]


    return (
        <article >
            {buttons.map(elm => <button key={elm} onClick={() => paintCountry(elm)}><small>{elm}</small></button>)}

            <br />
            
            {profiles.map((elm, i) =>
                <div key={i} className={`${elm.country} fbCard`} style={{ backgroundColor: colorList[i] }}>

                    <div>
                        <img className="idPhoto" src={elm.img} alt={elm.firstName} />
                    </div>
                    <div className='info'>
                        <p><strong>Firstname:</strong>{elm.firstName} </p>
                        <p><strong>Lastname:</strong>{elm.lastName} </p>
                        <p><strong>Country:</strong>{elm.country} </p>

                        <p><strong>Type:</strong> {elm.isStudent ? <span>Student</span> : <span>Teacher</span>}</p>

                    </div>


                </div>)}

        </article>
    )

   
}

export default Facebook