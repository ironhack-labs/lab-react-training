import { useState } from "react";

export default function LikeButton() {

    let [num, setNum] = useState(0)

    const aumentar = () => {

        setNum(
            num+=1
        )
        console.log(num);
    }

    return (
        <>
            {
                num === 1 ?
                <button onClick={() => aumentar()}>{num} Like</button>
                :
                <button onClick={() => aumentar()}>{num} Likes</button>
            }
        </>

    )
}
