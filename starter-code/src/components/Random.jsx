import React from "react";

const Random = (props) => {
    const min = props.min;
    const max = props.max;
    const number = min + Math.floor(Math.random() * max);

    return (
        <div class="box">Random value between {min} and {max} =&gt; {number}</div>
    );
};

export default Random;