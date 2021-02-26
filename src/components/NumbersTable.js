import React from 'react'
export default function NumbersTable(props) {
    const numbers = []
    for (let i=0; i<props.limit; i++){
        if ((i+1)%2 === 0){
            numbers.push({number:i+1,
                className:'red'
            })
        }else {
            numbers.push({number:i+1,
                className:'white'
        })
    }
}
    console.log(numbers)
    return (
        <>
        <div className='contenedor'>
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