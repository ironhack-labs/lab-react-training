import { useState } from 'react';
import profiles from './../../data/berlin.json';
import './FaceBook.css'

const FaceBook = () => {

    const [country, setCountry] = useState(null)

    const isSelectedCountry = (selectedCountry, profileCountry) => {

        if (selectedCountry === profileCountry) {
            return true
        }
    }

    const setSelectedCountry = (selectedCountry) => {

        if (selectedCountry === 'All') {
            setCountry(null)
        } else {
            setCountry(selectedCountry)
        }
    }

    return (
        <div className="facebook">
            <button onClick={() => setSelectedCountry('USA')}>USA</button>
            <button onClick={() => setSelectedCountry('England')}> England</button>
            <button onClick={() => setSelectedCountry('Germany')}>Germany</button>
            <button onClick={() => setSelectedCountry('Malaysia')}>Malaysia</button>
            <button onClick={() => setSelectedCountry('All')}>All</button>

            {
                profiles.map((elm, i) => {
                    return (
                        <div key={i} className='item' style={{ backgroundColor: isSelectedCountry(country, elm.country) ? 'red' : '' }}>
                            <div className="row">
                                <div className="col-3">
                                    <figure><img src={elm.img} alt="" /></figure>
                                </div>
                                <div className="col-4">
                                    <h4><b>First Name: </b>{elm.firstName}</h4>
                                    <h4><b>Last Name: </b>{elm.lastName}</h4>
                                    <h4><b>Country: </b>{elm.country}</h4>
                                    <h4><b>Type: </b>{elm.isStudent ? 'Student' : 'Teacher'}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FaceBook