import "./FaceBook.css"
import { Component } from "react"
import profiles from '../../data/berlin.json'
import { id } from "postcss-selector-parser";

class FaceBook extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                {profiles.map((profile) => {
                    return (
                        <div className="flex">
                            <img src={profile.img}></img>
                            <div className="flex-start">
                                <p><b>FirstName</b>: {profile.firstName}</p>
                                <p><b>LastName</b>: {profile.lastName}</p>
                                <p><b>Country</b>: {profile.country}</p>
                                <p><b>Type</b>: {profile.isStudent === true ? "Student" : "Teacher"}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FaceBook