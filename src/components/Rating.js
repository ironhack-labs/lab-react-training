import React from 'react'

class Rating extends React.Component{

    numOfStars(n){
        const numb = Math.round(n)
        const stars = {
            '0': '☆☆☆☆☆',
            '1': '★☆☆☆☆',
            '2': '★★☆☆☆',
            '3': '★★★☆☆',
            '4': '★★★★☆',
            '5': '★★★★★',
        }
        return stars[numb]
        
    }

    render(){
        const {children} = this.props
        return (
            <div>
                <p>{this.numOfStars(children)}</p>
            </div>
        )
    }
}

export default Rating