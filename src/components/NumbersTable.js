import React from 'react'

function NumbersTable(props) {
   

    let numeros=[]
    for (let i=1; i<=props.limit; i++){
        let bgColor={
            backgroundColor: i % 2 ? 'red': 'white'
        }
        if(i%2){
            numeros.push(
                <div style={bgColor}>
                    <p>{i}</p>
                </div>
            )
        }else{
            numeros.push(
                <div style={bgColor} >
                    <p>{i}</p>
                </div>)
        }
    }

    return (
        <div>
            {numeros}
        </div>
    )
}

export default NumbersTable