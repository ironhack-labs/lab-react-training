import { useState } from "react"

function LikeButton() {

    let clickCounter = 0
    let [numberLikes, setNumberLikes] = useState(clickCounter)
    let text

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    let i = 0
    let [index, setIndex] = useState(i)


    const countLikes = () => {

        if (index < 5) { index++ }
        else { index = 0 }

        let j = index
        setIndex(j)

        let anotherClick = numberLikes + 1
        setNumberLikes(anotherClick)
    }

    let buttonStyle = { backgroundColor: colors[index] }
    numberLikes === 1 ? text = `${numberLikes} Like` : text = `${numberLikes} Likes`

    return (
        <article>
            <button onClick={countLikes} style={buttonStyle}>
                {text}
            </button>
        </article>
    )
}




export default LikeButton