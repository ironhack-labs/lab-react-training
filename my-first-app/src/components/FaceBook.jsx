import { useState } from "react"
import profileData from './../data/berlin.json';

const Facebook = () => {

    const [country, setCountry] = useState("")
    const blue = {
        backgroundColor: 'blue'
    }

    const white = {
        backgroundColor: 'white'
    }

    const paintCountry = e => {
        const { value } = e.target
        setCountry(value)
    }


    return (
        <div className="Facebook">
            <input type="button" onClick={paintCountry} value="All" />
            <input type="button" onClick={paintCountry} value="USA" />
            <input type="button" onClick={paintCountry} value="Germany" />
            <input type="button" onClick={paintCountry} value="England" />
            <input type="button" onClick={paintCountry} value="Malaysia" />
            <input type="button" onClick={paintCountry} value="Norway" />
            {
                profileData.map((elm, i) => {
                    return (
                        <div key={i} className="card" style={country == elm.country || country == "All" ? blue : white}>
                            <div>
                                <figure>
                                    <img src={elm.img} alt={elm.firstName} />
                                </figure>
                            </div>
                            <div>
                                <p><strong>First Name: </strong>{elm.firstName}</p>
                                <p><strong>Second Name: </strong>{elm.lastName}</p>
                                <p><strong>Country: </strong>{elm.country}</p>
                                <p><strong>Type: </strong>{elm.type ? 'Student' : 'Teacher'}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Facebook