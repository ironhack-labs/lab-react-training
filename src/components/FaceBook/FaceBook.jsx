import { useState } from "react"
import "./FaceBook.css"
import profiles from './../..//data/berlin.json';




const FaceBook = () => {
    const [Fb, setFb] = useState(profiles)

    let paises = {};

    let arraySinRepetidos = profiles.reduce(function (resultado, objeto) {
        if (!paises[objeto.country]) {
            paises[objeto.country] = true;
            resultado.push(objeto);
        }
        return resultado;
    }, []);


    const removeCountry = nameCountry => {
        const filterCountry = profiles.filter(elm => elm.country == nameCountry)
        setFb(filterCountry)
    }

    const allCountry = () => {
        console.log("jej", profiles)
        const allCountry = profiles
        setFb(allCountry)
    }


    return (<>
        <button onClick={allCountry}>All Country</button>
        {arraySinRepetidos.map(({ country }) => {
            return (
                <button onClick={() => removeCountry(country)}>{country}</button>)
        })}
        {Fb.map(({ firstName, lastName, country, img, isStudent }) => {
            return (
                <div className="cardFb">

                    <div className="imgFb">
                        <img src={img} alt="" />
                    </div>

                    <div className="textFb">
                        <p><strong>First Name: </strong>{firstName}</p>
                        <p><strong>Second Name: </strong>{lastName}</p>
                        <p><strong>Country: </strong>{country}</p>
                        <p><strong>Type: </strong>{isStudent ? "student" : "Teacher"}</p>

                    </div>

                </div>
            )
        })}
    </>
    )

}


export default FaceBook   