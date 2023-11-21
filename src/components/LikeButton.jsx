import { useState } from 'react'
const LikeButton = () => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
        setValue(value + 1)
    }

    return (

        <div className="LikeButton">
            <button onClick={handleClick}>
                {value} like{value === 1 ? '' : ''}
            </button>
        </div>
    )
}

export default LikeButton