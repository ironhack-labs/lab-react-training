import './FaceBook.css'
import data from './../../data/berlin.json'
import { useState } from 'react'


const FaceBook = () => {
    const countryRepeated = data.map(person => person.country)
    const uniqueCountrys = [...new Set(countryRepeated)]

    const [selectedCountry, setSelectedCountry] = useState('All')

    const blueBack = { backgroundColor: '#a3d2e2' }

    const listOfPersons = data.map((person, i) => {
        const { img, firstName, lastName, country, isStudent } = person
        if (selectedCountry === country || selectedCountry === 'All') {
            return (
                <li key={i} >
                    <article className="subCard" style={blueBack}>
                        <img src={img} alt={`${firstName} face`} />
                        <article>
                            <p><b>First name:</b> {firstName}</p>
                            <p><b>First name:</b> {lastName}</p>
                            <p><b>country:</b> {country}</p>
                            <p><b>student:</b> {isStudent ? 'Student' : 'Teacher'} </p>
                        </article>
                    </article >
                </li>
            )
        } else {
            return (
                <li key={i}>
                    <article className="subCard" >
                        <img src={img} alt={`${firstName} face`} />
                        <article>
                            <p><b>First name:</b> {firstName}</p>
                            <p><b>First name:</b> {lastName}</p>
                            <p><b>country:</b> {country}</p>
                            <p><b>student:</b> {isStudent ? 'Student' : 'Teacher'} </p>
                        </article>
                    </article >
                </li>
            )
        }
    })

    const buttonHandler = (value) => {
        setSelectedCountry(value)
    }

    return (
        <>
            {selectedCountry === 'All' ?
                <button onClick={() => buttonHandler('All')} style={blueBack}>All</button> :
                <button onClick={() => buttonHandler('All')}>All</button>
            }


            {uniqueCountrys.map((country, i) => selectedCountry === country ?
                <button onClick={() => buttonHandler(country)} style={blueBack} key={i}>{country}</button> :
                <button onClick={() => buttonHandler(country)} key={i}>{country}</button>
            )}

            <ul className='FaceBook'>
                {listOfPersons}
            </ul>
        </>
    )
}

export default FaceBook