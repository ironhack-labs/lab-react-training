import React from 'react'

class Dice extends React.Component {
    state = {
        diceImage: "-empty"
    }

    clickHandler = () => {
        this.setState(state => ({
            diceImage: "-empty"

        }))
        setTimeout(() => { 
        this.setState(state => ({
            diceImage: Math.ceil(Math.random() * 6)

        }))
        }, 1000);
    }

    render() {
        console.log('what is this',this.state, this.props);

        // setTimeout(function(){ 

        //     console.log('does this line every get reached' )
        //     return (
        //         <img src={`img/dice6.png`} alt="Dice"/> )

                
        // }, 1000);
      
        return (

          <>
            <button onClick={this.clickHandler}>
                <img src={`img/dice${this.state.diceImage}.png`} alt="Dice"/> 
            </button>
          </>
        );
    }

}

export default Dice;