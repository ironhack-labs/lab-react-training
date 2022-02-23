import profiles from './../data/berlin.json';
import { useState } from "react"
import "./FaceBook.css"



function FaceBook() {

    let colors = []
    profiles.forEach(elm => {

        colors.push("white")
    })


    let [colorList, setList] = useState(colors)

    let newColorList

    function paintCountry(str) {


        newColorList = ([...colorList])

        profiles.forEach((person, idx) => {

            if (str === person.country) {
                newColorList[idx] = "cornflowerblue"
                setList(newColorList)
            }
        })

    }


    const allCountries = profiles.map(elm =>
        elm.country)
    const buttons = [...new Set(allCountries)]


    return (
        <article >
            {buttons.map(elm => <button key={elm} onClick={() => paintCountry(elm)}><small>{elm}</small></button>)}
            <br />
            <hr />
            {profiles.map((elm, idx) =>
                <div key={idx} className={`${elm.country} facebookCard`} style={{ backgroundColor: colorList[idx] }}>

                    <div>
                        <img className="idPicture" src={elm.img} alt={elm.firstName + " " + elm.lastName} />
                    </div>
                    <div className='facebookDiv'>
                        <p><strong>Firstname:</strong>{elm.firstName} </p>
                        <p><strong>Lastname:</strong>{elm.lastName} </p>
                        <p><strong>Country:</strong>{elm.country} </p>

                        <p><strong>Type:</strong> {elm.isStudent ? <span>Student</span> : <span>Teacher</span>}</p>

                    </div>


                </div>)}

        </article>
    )
}



<article className="idCard">





</article>

export default FaceBook