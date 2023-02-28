import { useEffect, useState } from 'react'
import '../FacebookCard/FacebookCard.css'

const FacebookCard = ({ img, firstName, lastName, country, isStudent, selected }) => {

    const [currentColor, setColor] = useState('white')

    useEffect(() => {
        if (country === selected) {
            setColor('blue');
        } else {
            setColor('white');
        }
    }, [country, selected])

    console.log(country, selected)




    const divStyle = {
        backgroundColor: currentColor
    }
    return (
        <div className="FacebookCard" style={divStyle}>
            <img src={img} alt={firstName} />
            <div>
                <h3>{firstName} {lastName}</h3>
                <h3>Country: {country}</h3>
                <h3>Type:{isStudent ? 'Student' : 'Teacher'}</h3>
            </div>
        </div >
    )
}

export default FacebookCard