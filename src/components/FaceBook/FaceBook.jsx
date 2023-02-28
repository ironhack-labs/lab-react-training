import './FaceBook.css'
import profiles from '../../data/berlin.json';
import { useState } from "react"

const FaceBook = () => {

    const [peopleProfiles, setProfiles] = useState(profiles)
    const [country, setCountry] = useState('all')

    let value

    const copyArr = [...peopleProfiles]
    const newKeyArr = copyArr.map((obj) => {
        return {
            ...obj,
            color: false
        }
    })



    const switchCountry = elm => {
        value = elm.target.value
        setCountry(value)
    }

    return (
        <div className="facebook">
            <button onClick={switchCountry} value="all">All</button>
            <button onClick={switchCountry} value="usa">USA</button>
            <button onClick={switchCountry} value="england">England</button>

            {
                newKeyArr.map((elm, i) => {

                    const { color } = elm

                    console.log(color)

                    const type = elm.isStudent ? 'Strudent' : 'Teacher'

                    const boxStyle = {
                        backgroundColor: 'blue'
                    }

                    return (
                        < article key={i} className='profileCard' style={color ? boxStyle : undefined}>
                            <div>
                                <img src={elm.img} alt={elm.firstName} />
                            </div>
                            <div>
                                <p> <strong>First name:</strong> {elm.firstName}</p>
                                <p> <strong>Last name:</strong> {elm.lastName}</p>
                                <p> <strong>Country:</strong> {elm.country}</p>
                                <p> <strong>Type:</strong> {type}</p>
                            </div>
                        </article>
                    )
                })
            }
        </div >
    );
}

export default FaceBook