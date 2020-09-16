import React, {useState} from 'react'
import data from '../data/berlin.json'

const FaceBook = () => {

    let [country, setCountry] = useState("")

    const changeBackground = (country) => {
        setCountry(country)
    }

    return (
        <div>
        <button onClick={() => {changeBackground('')}}>All</button>
        <button onClick={() => {changeBackground('England')}}>England</button>
        <button onClick={() => {changeBackground('USA')}}>USA</button>
        <button onClick={() => {changeBackground('Malaysia')}}>Malaysia</button>
        <button onClick={() => {changeBackground('Germany')}}>Germany</button>
        {
            data.map((elem, index) => {
                return (
                <div key={index} className="IdCard box" style={elem.country === country ? { backgroundColor : `lightblue`} : null}>
                    <img src={elem.img} alt="img" className="fbImg"></img>
                    <div>
                        <span>First name : {elem.firstName}</span>
                        <br/>
                        <span>Last name : {elem.lastName}</span>
                        <br/>
                        <span>Country : {elem.country}</span>
                        <br/>
                        <span>Is Student? : {elem.isStudent ? "Yes" : "No"}</span>
                    </div>
                </div>
                )
            })
        }            
        </div>
    )
}



export default FaceBook
