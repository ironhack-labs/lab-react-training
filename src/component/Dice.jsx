import React from 'react';

 class Dice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          active: false,
        };
    }

    toggleDice = () => {
        this.setState({
          active: !this.state.active
        });
      };

   render() {
    const emptyDice = '/img/dice-empty.png';
    const diceImagesArray = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png' ];
     return (
       <div class="dice">
         <img 
         src={this.state.active ? this.props.imgClicked : this.props.img} 
         alt="picture" 
         onClick={this.toggleDice}
        />
        </div>
     );
   }
 }

 export default Dice;