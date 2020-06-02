import React from "react";

// TODO: to be deleted or replaced
// import 'bootstrap/dist/css/bootstrap.css';
// import "./BoxColor.css";

function BoxColor (props) {

    return (
        <div>
        {/* <div className={props.red}>some text</div> */}
            <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>{props.r} Some text</div>
        </div>
    )
}


export default BoxColor;