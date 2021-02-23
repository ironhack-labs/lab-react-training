import React from 'react'


class Dice extends React.Component {
    state = {
        currentImage: './img/dice3.png'
    }

    imageClick = () => {
         this.setState((state, props) =>({
             currentImage : './img/dice-empty.png'
         }))
         setTimeout(()=> {
            this.setState((state, props) =>({
                currentImage : `./img/dice${Math.floor(Math.random()*6)+ 1}.png`
            }))
         }, 1000)
     }
     render () {
         return (
            <img style={{width:'100px'}} src={this.state.currentImage} onClick={this.imageClick} alt="img"/>
         )
     }


}

export default Dice 