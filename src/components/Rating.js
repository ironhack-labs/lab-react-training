import React from 'react'

function Rating({children}) {
    let stars= Math.round (children)
let frase
    switch (stars) {
        case 0: frase =`☆☆☆☆☆`
            break;
        case 1.49: frase =`★☆☆☆☆`
            break;
        case 1.5: frase =`★★☆☆☆`
        break;
        case 3: frase =`★★★☆☆` 
        break;
        case 4: frase =`★★★★☆` 
        break;
        case 5: frase =`★★★★★` 
        break;
            default:
                break;
    }

    return (
        <div>
         <h1>{frase} </h1>

        </div>
    )
}

export default Rating
