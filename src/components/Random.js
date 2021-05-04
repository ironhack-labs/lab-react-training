import React from 'react'

class Random extends React.Component{

    randomNumber(){
        const {min, max}=this.props
        return Math.floor(Math.random()*(max-min+1))+min
    }

    render(){
        const {min, max}=this.props
        return (
            <div className="box">
                <p>Randome value between {min} and {max} ={'>'} {this.randomNumber()}</p>
            </div>
        )
    }
}

export default Random