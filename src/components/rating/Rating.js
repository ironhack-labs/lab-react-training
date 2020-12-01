import React, { Component } from 'react'

export default class Rating extends Component {
    
    ratingHandler = (num) => {
        const rating = Math.round(Number(num))

        switch(rating) {
            case 0:
                return <p>&#9734; &#9734; &#9734; &#9734; &#9734;</p>
            case 1:
                return <p>&#9733; &#9734; &#9734; &#9734; &#9734;</p>
              break;
            case 2:
                return <p>&#9733; &#9733; &#9734; &#9734; &#9734;</p>
              break;
            case 3:
                return <p>&#9733; &#9733; &#9733; &#9734; &#9734;</p>
            break;
            case 4:
                return <p>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
            break;
            case 5:
                return <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            break;

            default:
              // code block
          }

        return rating
    }
    
    render() {
        return (
            <div>
                {this.ratingHandler(this.props.children)}
            </div>
        )
    }
}
