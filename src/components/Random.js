import React from 'react'

export default function Random(props) {
    const {min, max} = props;
    const randomNumber = Math.floor(Math.random() * (max - 1) +min)

    return (
        <div>
            Random value betwen {min} and {max} =&gt; {randomNumber}
        </div>
    )
}
