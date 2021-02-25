// import React, {useState} from 'react'

// export default function NumbersTable(data) {

//     const [parOImpar, setparOImpar] = useState([])
//     const limit= Number(data.limit)

//     for(let i = 0; i < limit+1 ;i++){
        
//         if(i%2===0){
//              setparOImpar([ ...parOImpar,{ number: `<div className="red">${i}</div>` }]) 
            
//         }else{
//              setparOImpar([...parOImpar, { number: `<div className="white">${i}</div>` }])
//         }

      
//     }


//     return (
//         <div>
//             <p>
//                 {parOImpar.map((e,id)=>{
//                     return e
//                 })}
//             </p>
//         </div>
//     )
// }

import React from "react"
export default function NumbersTable(props) {
    const numbers = []
    for (let i=0; i<props.limit; i++){
        if ((i+1)%2 === 0){
            numbers.push({number:i+1,
                className:"red"
            })
        }else {
            numbers.push({number:i+1,
                className:"white"
        })
    }
}
    console.log(numbers)
    return (
        <>
        <div className="contenedor">
        {
            numbers.map((element)=>{
                return(
                    <span className={element.className}>{element.number}</span>
                )
            })
        }
        </div>
        </>
    )
}