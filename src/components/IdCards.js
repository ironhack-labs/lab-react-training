import React from 'react'

export default function IdCards(datos) {

        return (
        <div className="idCards">
            <div>
                <img src={datos.picture}/>
            </div>
            <div>
                <h1> {datos.firstName} , {datos.lastName}</h1>
                <h2> {datos.gender}</h2>
                <p>Altura : {datos.height}</p>
                <p>Cumpleaños : {datos.birth.toLocaleString()}</p>
            </div>
        </div>
    )
}
