import React from "react"

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    const cardStyle = {
        display: "flex",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        width: "800px",
        textAlign: "left",
    }

    const imgStyle = {
        width: "250px",
        marginRight: "15px",
    }

    return (
        <article style={cardStyle}>
            <img src={picture} alt={firstName} style={imgStyle} />
            <div>
                <h2>
                    <b>First name:</b> {firstName}
                </h2>
                <h2>
                    <b>Last name:</b> {lastName}
                </h2>
                <h2>
                    <b>Gender:</b> {gender}
                </h2>
                <h2>
                    <b>Height:</b> {height}
                </h2>
                <h2>
                    <b>DOB:</b> {birth.toDateString()}
                </h2>
            </div>
        </article>
    )
}
export default IdCard
