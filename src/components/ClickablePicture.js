import React from 'react'

export default class ClickablePicture extends React.Component {

    state = {
        pic1: '../img/persons/maxence.png',
        pic2: '../img/persons/maxence-glasses.png',
        activePic: '../img/persons/maxence.png',
        picState: true
    }


    // changePic = () =>{
    //     if (this.state.picState = true){
    //         this.setState({
    //             activePic: '/img/persons/maxence.png'
    //         })
    //     } else {
    //         this.setState({
    //             activePic: '/img/persons/maxence-glasses.png'
    //         })
    //     }
    // }

    render() {
    return (
        <div>
            <img src='../img/persons/maxence-glasses.png' style={{width: '200px', height: '200px'}} alt='pic'></img>
            <img src='../img/persons/maxence-glasses.png'></img>
        </div>
    )}
}
