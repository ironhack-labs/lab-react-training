import { useState } from "react"
import data from "/src/assets/berlin.json"
import "./FaceBook.css"

const FaceBook = () => {

    const [country, setCountry] = useState("")
    const [dataList, setDataList] = useState(data)
    const [filteredList, setFilteredList] = useState(data)

    const fillBackground = event => {
        const { value } = event.target
        setCountry(value)
    }

    const getValue = event => {
        const { value } = event.target

        const listCopy = dataList.filter(e => e.lastName.includes(value))
        console.log({ listCopy })
        setFilteredList(listCopy)
    }
    return (
        <>
            <button value="" onClick={fillBackground}>All</button>
            <button value="USA" onClick={fillBackground}>USA</button>
            <button value="England" onClick={fillBackground}>England</button>
            <button value="Malaysia" onClick={fillBackground}>Malaysia</button>
            <button value="Germany" onClick={fillBackground}>Germany</button>
            <label>Search Last Name</label>
            <input type="text" onChange={getValue} />

            {filteredList.map(e => {

                return (

                    <div className={`${e.country === country && "blue"} cardCont`}>

                        <figure><img src={e.img} alt={e.firstName} /></figure>
                        <div>
                            <p>Last Name: {e.lastName}</p>
                            <p>First Name: {e.firstName}</p>
                            <p>Country: {e.country}</p>
                            <p>Type: {e.isStudent ? "Teacher" : "Student"}</p>
                        </div>
                    </div>
                )


            }
            )}
        </>
    )

}

export default FaceBook 