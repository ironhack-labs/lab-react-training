import React, { Component } from 'react'

export default class Rating extends Component {
    printStarts=(x)=>{
        let rating=x;
        rating=Math.round(rating);
        const numBS=rating;
        const numWS=5-rating;
        let result='';
        for(let i=0;i<numBS;i++){
            result+='★ '
        }
        for(let j=0;j<numWS;j++){
            result+='☆ '
        }
        return result

    }

    render() {
        return (
            <div className="Rating">
            <h1>{this.printStarts(this.props.children)}</h1>
            </div>
        )
    }
}
