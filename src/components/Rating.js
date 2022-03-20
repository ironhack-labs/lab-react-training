import React, { Component } from "react"
import starPng from "../assets/images/full-star.png"
import noStarPng from "../assets/images/empty-star.PNG"

class Rating extends Component {
    state = {}
    printStars() {
        let stars = this.props.children - 1
        const starsArray = ["no-star", "no-star", "no-star", "no-star", "no-star"]
        while (stars > 0) {
            stars--
            starsArray.pop()
            starsArray.unshift("star")
        }
        return (
            starsArray.map((s, i) => {
                return <div key={i}>
                    <img src={s === "star" ? starPng : noStarPng} />
                </div>
            })
        )
    }
    render() {
        return (
            <div style={{ display: "flex" }}>{this.printStars()}</div>
        )
    }
}

export default Rating;