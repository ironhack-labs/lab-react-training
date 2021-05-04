import React from 'react'

class Dice extends React.Component{

    state = {
        img: 'img/dice1.png',
    }

    changeImg(i){
        const imgs = {
            0: 'img/dice-empty.png',
            1: 'img/dice1.png',
            2: 'img/dice2.png',
            3: 'img/dice3.png',
            4: 'img/dice4.png',
            5: 'img/dice5.png',
            6: 'img/dice6.png',
        }
        setTimeout(()=>{
            setTimeout(()=>{
                this.setState({img: imgs[i]})
            }, 1000)
            this.setState({img: imgs[0]})
        }, 1)
    }

    render(){
        const style = {width: '300px', margin: '10px'}
        return(
            <div>
                <img style={style} onClick={()=>this.changeImg(Math.floor(Math.random()*6))} src={this.state.img} alt={this.state.img}/>
            </div>
        )
    }
}

export default Dice
