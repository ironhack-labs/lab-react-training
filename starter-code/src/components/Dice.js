import React, {Component} from 'react';

class Dice extends Component {

    state ={imagen:`/img/dice${Math.floor(Math.random() * (6 - 1) + 1)}.png`}

    likea = () => {
        let {likes} = this.state;
        likes = likes+1;
        this.setState({likes});
      }

      clickP = e => {
          let {imagen} = this.state;
            imagen = '/img/dice-empty.png'
        this.setState({imagen})}
      
    clickS = e => {
        let {imagen} = this.state;
            imagen = `/img/dice${Math.floor(Math.random() * (6 - 1) + 1)}.png`
        this.setState({imagen})}


      render(){

        let func1 = this.clickP;
        let func2 = this.clickS;

        let func3 = function (){
            setTimeout(func1(),1000)
            setTimeout(func3(),3000)
        };

          return(
            <div className = 'dado' >
            <img width = '100px' height = '100px' src={this.state.imagen} onClick={this.clickP}/>
            </div>
          )
      }      
}
export default Dice;