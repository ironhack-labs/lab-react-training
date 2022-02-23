import { useState } from "react";

export default function LikeButton() {

    const colors = ['purple','blue','green','yellow','orange','red'];

    let [data, setData] = useState(0)

    const aumentar = () => {

        setData(
            data + 1
        )
        console.log(data);
    }

    return (
        <>
            {
                data === 1 ?
                <button onClick={() => aumentar()}>{data} Like</button>
                :
                <button onClick={() => aumentar()}>{data} Likes</button>
            }
        </>
    )
}
