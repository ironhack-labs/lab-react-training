import React, {Component} from 'react'

class Dice  extends Component{
    state={
        urlImage : "./img/dice1.png"
    }
 /*    changeImage = () =>{
        console.log(this.state)
        
        this.setState({
            urlImage: this.randomImage()
        })
    } */
    randomImage(){
        const arrayImages = ["./img/dice1.png", "./img/dice2.png","./img/dice3.png","./img/dice4.png","./img/dice5.png","./img/dice6.png"]
        const elementRandom = Math.floor(Math.random() * arrayImages.length ) + 0;
        console.log(arrayImages[elementRandom])

        
        
        
        
        //setTimeout(function(){ alert("Hello"); }, 1000);
        return arrayImages[elementRandom] 
    }
    displayImage = ()=>{
          setTimeout(
              
            function() {
                setTimeout(
                    function() {
                        this.setState({
                            urlImage : this.randomImage()
                        });
                    }
                    .bind(this),
                    1000
                );
                this.setState({
                    urlImage : "./img/dice-empty.png"
                });
            }
            .bind(this),
            0
        );
        
    }
    render(){

    
    return(
        <div>
            <img className ="Dice" src={this.state.urlImage} alt='' onClick={this.displayImage}/>
        </div>
    )}

}
export default Dice;