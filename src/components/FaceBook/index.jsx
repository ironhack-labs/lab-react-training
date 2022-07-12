import './FaceBook.css'
import userData from './../../data/berlin.json'
import { useState } from 'react'


const FaceBook = () => {
    const [selectedCountry, setSelectedCountry] = useState('All')
    const [data, setData] = useState(userData)

    const countryRepeated = data.map(person => person.country)
    const uniqueCountrys = [...new Set(countryRepeated)]


    const blueBack = { backgroundColor: '#a3d2e2' }



    const listOfPersons = data.map((person, i) => {
        const { img, firstName, lastName, country, isStudent, displayed } = person
        return (
            <li key={i} >
                <article className="subCard" style={selectedCountry === country || selectedCountry === 'All' ? blueBack : undefined}>
                    <img onClick={() => displayHandler(i)} src={img} alt={`${firstName} face`} />
                    {displayed ?
                        <article>
                            <p><b>First name:</b> {firstName}</p>
                            <p><b>First name:</b> {lastName}</p>
                            <p><b>country:</b> {country}</p>
                            <p><b>student:</b> {isStudent ? 'Student' : 'Teacher'} </p>
                        </article>
                        :
                        undefined
                    }

                </article >
            </li>
        )
    })

    const displayHandler = (i) => {
        const dataCopy = [...data]

        dataCopy[i].displayed = dataCopy[i].displayed ? false : true

        setData(dataCopy)
    }

    const sortByNameHandler = () => {
        const dataCopy = [...data]
        dataCopy.sort((a, b) => a.firstName.localeCompare(b.firstName))
        setData(dataCopy)
    }

    const sortByCountry = () => {
        const dataCopy = [...data]
        dataCopy.sort((a, b) => a.country.localeCompare(b.country))
        setData(dataCopy)
    }
    const countryButtonHandler = (value) => {
        setSelectedCountry(value)
    }

    const searchHandler = (value) => {
        const filterData = userData.filter(person => person.firstName.includes(value))
        setData(filterData)

    }

    return (
        <>
            <button onClick={() => countryButtonHandler('All')} style={selectedCountry === 'All' ? blueBack : undefined}>All</button>

            {uniqueCountrys.map((country, i) =>
                <button onClick={() => countryButtonHandler(country)} style={selectedCountry === country ? blueBack : undefined} key={i}>{country}</button>

            )}
            <br />
            <button onClick={sortByNameHandler}>Sort by name</button>
            <button onClick={sortByCountry}>Sort by country</button>
            <br />
            <input type="text" placeholder='first name' name="textInput" id="textInput" onChange={() => searchHandler(window.event.target.value)} />

            <ul className='FaceBook'>
                {listOfPersons}
            </ul>
        </>
    )
}

export default FaceBook