import React from "react";

function Random(props) {

    const{ min, max } = props;
    const randomVal = Math.floor(Math.random() * (max - min)) + min
    return <h2> Random value between { min } and { max }: { randomVal } </h2>
}

export default Random;