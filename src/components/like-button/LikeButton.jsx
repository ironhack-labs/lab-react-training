import {useState} from "react";

function LikeButton({ init }) {
    const [count, setCount] = useState(init);

    const like = () => {
        setCount(count + 1)
    }

  return (
    <button className="btn btn-primary" onClick={like}> {count} Like!</button>
  )
}

LikeButton.defaultProps = {
    init: 0
}

export default LikeButton;