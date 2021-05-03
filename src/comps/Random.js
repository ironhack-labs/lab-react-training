// imports 
import React from 'react'


//components
class Random extends React.Component{
    getRandom(max, min){
        return Math.floor(Math.random()*(max-min))+ min;
    }
    render(){
        const {min, max} = this.props
        return(
            <div className='card'>
                <p>Random value between {min} and {max} : {this.getRandom(max, min)}</p>
            </div>
        )
    }
}




// exports
export default Random;