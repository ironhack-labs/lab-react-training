import "./IdCard.css"
import React from "react"

class ClickableButton extends React.Component {
    render () {
        return (
            <div className="flex">
                <img src={this.props.picture}></img>
                <div className="flex-start">
                    <p><b>LastName</b>: {this.props.lastName}</p>
                    <p><b>FirstName</b>: {this.props.firstName}</p>
                    <p><b>Gender</b>: {this.props.gender}</p>
                    <p><b>Height</b>: {this.props.height}</p>
                    <p><b>Birth</b>: {this.props.birth}</p>
                </div>
            </div>
        )
    }
}

export default ClickableButton