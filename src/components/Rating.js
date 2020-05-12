import React from "react";

export default function Rating(props) {
    return (
        <div style={{fontSize: "xxx-large"}}>
            {/* {toStars(props.value)} */}
            {toStars(props.children)}
        </div>
    );

    function toStars(val) {
        const rounded = Math.round(val);
        let resp = "";
        for (let index = 0; index < 5; index++) {
            if (index < rounded) {
                resp += "★";
            } else {
                resp += "☆";
            }
        }
        return resp;
    }
}