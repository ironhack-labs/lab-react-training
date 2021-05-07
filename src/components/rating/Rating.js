import React from 'react'

const Rating = (props)=>{
    console.log(Math.round(props.children))

    function filledStar(number){
        let filledStar = ''
        let emptyStars = ''
        let newNumber = 5 - number
        for(let i = 0; i<number; i++){
            filledStar += '★'
        }
        for(let i = 0; i<newNumber; i++){
            emptyStars += '☆'
        }

        return filledStar+emptyStars
    }

    return (
        <section>
            <div>
                {filledStar(Math.round(props.children))}
            </div>
        </section>
    )
}

export default Rating