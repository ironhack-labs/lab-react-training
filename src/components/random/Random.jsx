import React from "react"

export default function Random({ min, max }) {
    return (
        <div class="Random">
        const random = Math.floor((Math.random() * {max}) + {min});
            <h1>Random value between {min} and {max} : random </h1>
        </div>
   )
}