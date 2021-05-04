import React from 'react';


class Random extends React.Component {
    render(){
        const randomize=((min,max)=>{
            return (Math.floor((Math.random()*(max-min+1))+min))
        })
        const {min,max} = this.props
        return (
            <p>Random value between {min} and {max} => {randomize(min,max)}</p>
      );
    }
    }

export default Random;