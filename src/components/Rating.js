import React from 'react'

class Rating extends React.Component {

    starsRate(number){
        number = number > 5 ? 5 : number
        let roundedNumber = Math.round(number)
        let options = {
           '0': '☆☆☆☆☆',
           '1': '★☆☆☆☆',
           '2': '★★☆☆☆',
           '3': '★★★☆☆',
           '4': '★★★★☆',
           '5': '★★★★★',
        }
        return options[roundedNumber]
    }
    
    render() {
        const {children} = this.props
     return (
         <div className='Rating'>
        <h2>{this.starsRate(children)}</h2>
         </div>
     )
    }   
}


export default Rating
