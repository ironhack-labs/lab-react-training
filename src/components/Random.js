import React from 'react'

class Random extends React.Component{

    render(){
        const {max, min} = this.props;
        const randomNum = Math.floor(Math.random()*(max-min)+min)
        return(
            <div className="random">
                <h2>Random value between {min} and {max} => {randomNum}</h2>
            </div>
        )
    }
}

export default Random
