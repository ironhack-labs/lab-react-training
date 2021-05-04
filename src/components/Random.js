import React from 'react'

class Random extends React.Component {
    randomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    render() {
    const {min, max} = this.props
     return (
     <div className='Random'>
         <h4>Random number between {min} and {max} : {this.randomNumber(min, max)}</h4>
     </div>
     )
    }
}


export default Random