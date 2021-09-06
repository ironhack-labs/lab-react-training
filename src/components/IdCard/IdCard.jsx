import React from "react"
import "./IdCard.css"

export default function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    //  render() {
    // const { lastName, firstName, gender, height, birth, picture } = this.props
    return (
        <div class="IdCard">
            <ul>
                <li>Last name: {lastName}</li>
                <li>First name: {firstName}</li>
                <li>Gender: Female</li>
                <li>Height: {height}</li>
                <li>Birth: {birth}</li>
            </ul>

            {/* <img src={picture}/> */}
        </div>


    )
    // }
}