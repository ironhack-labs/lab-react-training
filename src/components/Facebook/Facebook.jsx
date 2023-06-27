import { useState } from 'react'
import profile from '../../data/berlin.json'
import './Facebook.css'

const Facebook = () => {

    const [valueArray, setArray] = useState(profile)

    return (
        <div>
            <button>All</button>
            <button>USA</button>
            <button>England</button>
            <button>Malaysia</button>
            <button>Germany</button>

            {
                valueArray.map((elm, i) => {
                    return (
                        <div key={i} className='facebook-card'>
                            <img src={elm.img} alt={elm.firstname} />
                            <div>
                                <p><strong>FirstName: </strong>{elm.firstName}</p>
                                <p><strong>LastName: </strong>{elm.lastName}</p>
                                <p><strong>Country: </strong>{elm.country}</p>
                                <p><strong>Type: </strong>{elm.isStudent ? <>Studend</> : <>Teacher</>}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Facebook