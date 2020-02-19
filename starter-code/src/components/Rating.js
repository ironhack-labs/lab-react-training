import React from 'react'
// Encontre esto interesante https://reactjsexample.com/rate-something-with-material-ui-style/
//https://mui.wertarbyte.com/#material-ui-rating
const Rating = (props) =>{

    let rating = Math.round(props.children)
    let render = []

    //Creamos un for el cual se encargara de iretar sobre el rating
    for( let i = 0; i <= rating -1; i++){
        render.push('★')
    }

    for (let i = render.length; i < 5; i++) {
        render.push('☆')
    }


    return (
        <div>
            <p>{render.join(' ')}</p>
        </div>
    )

}



export default Rating