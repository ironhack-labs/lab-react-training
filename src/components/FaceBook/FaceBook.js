import "./FaceBook.css"
import profiles from './../../data/berlin.json'
import FaceBookCard from "./FaceBookCard"
import { useState } from "react"

const FaceBook = () => {

    const countries = []
    profiles.forEach(e => countries.push(e.country))
    const set = new Set(countries)
    const uniqueCountries = [...set]

    const [country, setCountry] = useState('none')

    const colored = (e, index) => {
        if (e.country === country) {
            return <div className="blue">
                < FaceBookCard key={index}
                    {...e}
                />
            </div>
        } else if (country === "all") {
            return <div className="blue">
                < FaceBookCard key={index}
                    {...e}
                />
            </div>
        } else {
            return < FaceBookCard key={index}
                {...e}
            />
        }
    }

    return (
        <> <button key="all" onClick={() => {
            setCountry((newCountry) => newCountry = "all")
        }}>All</button>
            {uniqueCountries.map((e, index) => {
                return <button key={index} onClick={() => {
                    setCountry((newCountry) => newCountry = e)
                }}>{e}</button>
            })}

            {profiles.map((e, ind) => {
                return colored(e, ind)
            })}</>
    )
}

export default FaceBook