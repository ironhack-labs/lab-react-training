// import React from 'react'

// let num = 0
// let color = ['#455eb4', 'salmon', 'yellowgreen', 'darkslateblue', 'orange', 'tomato']

// export default class LikeButton extends React.Component {

//     state = {
//         count: 0,
//         background: color[num]
//     }

//     addLikes = () => {
//         console.log('hola')
//         let newCount = this.state.count + 1
//         num++

//         if (num === 6) {
//             this.setState({background: this.background})
//             num = 0
//         } else {
//             this.setState({background: this.background})
//         }

//         this.setState({
//             count: newCount,
//             background: `${color[num]}`
//         })
//     }

//     render() {
//         return (
//             <button className="like-me" style={{background: this.state.background}} onClick={() => this.addLikes}> {this.state.count} Likes</button>
//         )
//     }

// }

import React, {useState} from 'react'


const LikeButton = () => {

    // let num = 0
    const color = ['#455eb4', 'salmon', 'yellowgreen', 'darkslateblue', 'orange', 'tomato']
    const [num, setNum] = useState(0)
    const [count, setCount] = useState(0)
    const [background, setBackground] = useState(color[num])

    function addLikes() {
        setCount(count + 1)

        if (num === 5) {
            setBackground(color[0])
            setNum(0)
        } else {
            setBackground(color[num + 1])
            setNum(num + 1)
        }
    }

    return (
        <button className="like-me" style={{background: background}} onClick={() => addLikes()}> {count} Likes</button>
    )
}

export default LikeButton
