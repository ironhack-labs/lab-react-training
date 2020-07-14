import React from 'react'

function divStyle(bgColor) {
    return{
            color: 'black', 
            background:  bgColor
        }
}

const NumbersTable = props => {
    let NumberArray = []
    for (let i=1; i<=props.limit; i++){
        if(i%2){
            NumberArray.push (
                <div className='number-box' style={divStyle('white')}>
                    <p>{i}</p>
                </div>
            )
        }else{
            NumberArray.push (
                <div className='number-box' style={divStyle('red')}>
                    <p>{i}</p>
                </div>)
        }
    }
    return(
        <div className='container-number'>
            {NumberArray}
        </div>
    )
}


export default NumbersTable