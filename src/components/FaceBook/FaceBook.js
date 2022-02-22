import './FaceBook.css'
import profiles from '../../data/berlin.json'
import { useState } from "react";

const FaceBook = () => {

    const [backgroundColor, setBackgroundColor] = useState({ backgroundColor: 'white' })

    const changeBackgroundColor = event => {
        profiles.map(elm => {
            // console.log(event.target.innerHTML)
            // console.log(elm.country)
            if (elm.country === event.target.innerHTML) {
                // console.log('------coincido')
                return setBackgroundColor({ backgroundColor: 'blue' })
            }
        })
    }

    const buttonsLabels = []
    profiles.map(elm => {
        if (buttonsLabels.indexOf(elm.country) === -1) {
            buttonsLabels.push(elm.country)
        }
    })

    return (
        <div>
            <button onClick={changeBackgroundColor}>All</button>
            {
                buttonsLabels.map((country, idx) => {
                    return <button key={idx} onClick={changeBackgroundColor}>{country}</button>
                })
            }
            {
                profiles.map((elm, idx) => {
                    return <article key={idx} className="faceBook" style={backgroundColor}>
                        <img src={elm.img} alt={elm.firstName} />
                        <div>
                            <p><strong>First Name: </strong>{elm.firstName}</p>
                            <p><strong>Last Name: </strong>{elm.lastName}</p>
                            <p><strong>Country: </strong>{elm.country}</p>
                            {elm.isStudent ? <p><strong>Type: Student</strong></p> : <p><strong>Type: Teacher</strong></p>}
                        </div>
                    </article>
                })
            }
        </div>
    )
}

export default FaceBook