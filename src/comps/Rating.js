// imports 
import React from 'react'


//components
class Rating extends React.Component{
    //Se que es muy facil refactorizar checkRating pero es que los compañeros usaron dos formas diferentes y aqui la mezcla, lo deje asi para recordar las dos formas. En la iteración 8(DriverCard) este metodo también, pero ya refactorizado
   checkRating(n){
    let options = {
        0: '☆☆☆☆☆',
        1: '★☆☆☆☆',
        2: '★★☆☆☆',
        3: '★★★☆☆',
        4: '★★★★☆',
        5: '★★★★★',
     }
      let num = Math.round(n)
       switch(num){
         case 0:
           return options[0];
        case 1:
           return options[1]; 
        case 2:
           return options[2];
        case 3:
           return options[3];
        case 4:
           return options[4];
        case 5:
           return options[5]; 
        default:          
       }
   }
    render(){
    
        const {children} = this.props
        return(
            <div className='card'>
                {this.checkRating(children)}
            </div>
        )
        }
}





// exports
export default Rating;