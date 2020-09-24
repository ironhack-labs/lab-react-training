// import React from 'react'


// export default class ClickablePicture extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             clickedBg: true,
//             backPic: this.props.img
//         }
//     }

//     changeBack = () => {
//         if (this.state.clickedBg) {
//             this.setState({backPic: this.props.imgClicked, clickedBg: false})
//         } else {
//             this.setState({backPic: this.props.img, clickedBg: true})
//         }
//     }

//     render() {
//         return (
//             <div className="avatar" style={{background: `url(${this.state.backPic}) no-repeat center center / cover`}} onClick={() => this.changeBack}></div>
//         )
//     }

// }


//USANDO HOOKS
import React, {useState} from 'react'

const ClickablePicture = (props) => {
    const [clickedBg, setClickedBg] = useState(true)
    const [backPic, setBackPic] = useState(props.img)

    function changeBack() {
        if (clickedBg) {
            setBackPic(props.imgClicked)
            setClickedBg(false)
        } else {
            setBackPic(props.img)
            setClickedBg(true)
        }
    }

    return (
        <div className="glasses" style={{background: `url(${backPic}) no-repeat center center / cover`}} onClick={() => changeBack()}></div>
    )
}

export default ClickablePicture