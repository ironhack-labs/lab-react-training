import { useState } from 'react'
import './NumbersTable.css'


const NumbersTable = ({limit}) => {  
    let casillas =[]
    
    for (let index = 0; index < limit; index++) {
        casillas.push(index+1)
    }

    return(
        <article className="boxes">
            { 
                casillas.map((num, index)=>{
                    return(
                     (num % 2 === 0) ?
                       ( <span key={index} className="box sqr red">{num}</span>)
                    :
                        (<span key={index}  className="box sqr">{num}</span>)
                    )

                })
            
            }
        </article>

    )
    
}

export default NumbersTable
