import "./Rating.css"
import { Component } from "react";
import FullStar from "./Resources/full.png"
import EmptyStar from "./Resources/empty.png"

class Rating extends Component {
    render () {
        const rate = Math.round(Number(this.props.children))

        if (rate == 0) {
            return (
                <div className="starsGroup">
                    <img src={EmptyStar}/>
                    <img src={EmptyStar}/>
                    <img src={EmptyStar}/>
                    <img src={EmptyStar}/>
                    <img src={EmptyStar}/>
                </div>
            )
        } else if (rate == 1) {
            return (
                <div className="starsGroup">
                    <img src={FullStar}/>
                    <img src={EmptyStar}/>
                    <img src={EmptyStar}/>
                    <img src={EmptyStar}/>
                    <img src={EmptyStar}/>
                </div>
            )
        } else if (rate == 2) {
            return (
                <div className="starsGroup">
                    <img src={FullStar}/>
                    <img src={FullStar}/>
                    <img src={EmptyStar}/>
                    <img src={EmptyStar}/>
                    <img src={EmptyStar}/>
                </div>
            )
        } else if (rate == 3) {
            return (
                <div className="starsGroup">
                    <img src={FullStar}/>
                    <img src={FullStar}/>
                    <img src={FullStar}/>
                    <img src={EmptyStar}/>
                    <img src={EmptyStar}/>
                </div>
            )
        } else if (rate == 4) {
            return (
                <div className="starsGroup">
                    <img src={FullStar}/>
                    <img src={FullStar}/>
                    <img src={FullStar}/>
                    <img src={FullStar}/>
                    <img src={EmptyStar}/>
                </div>
            )
        } else {
            return (
                <div className="starsGroup">
                    <img src={FullStar}/>
                    <img src={FullStar}/>
                    <img src={FullStar}/>
                    <img src={FullStar}/>
                    <img src={FullStar}/>
                </div>
            )
        }
    }
}

export default Rating;