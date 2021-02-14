
import React from 'react';
import "./Rating.css"

class Rating extends React.Component {
// ☆★
    render() {
        const ratings = ["★★★★★", "☆★★★★", "☆☆★★★", "☆☆☆★★", "☆☆☆☆★", "☆☆☆☆☆"]
        const rating = Math.round(this.props.children)
        const stars = ratings[rating]
        return <p className="rating-color">
           {stars}
           </p>
    }

}

export default Rating;


