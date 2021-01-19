import React from 'react'
import '../components/Rating.css'

class Rating extends React.Component {
    render() {

        let num = Math.round(this.props.children)

        let emptyStar = "☆";
        let fullStar = "★";
        let stars = fullStar.repeat(num) + emptyStar.repeat(5 - num)

        return (
            <h1>{stars}</h1>
        )
    }
}

export default Rating