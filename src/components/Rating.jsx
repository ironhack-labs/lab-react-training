import React from 'react'

function Rating (props) {
    const emptyStar = <i className="far fa-regular fa-star"></i>
    const star = <i className="fas fa-regular fa-star"></i>

    const totalStars = 5;
    const getActiveStars = (num) => {
        return Math.ceil(num)
    }

    const activeStars = getActiveStars(props.children)

        return(
            <div>
                {[...new Array(totalStars)].map((arr, index) => {
                    const icon = index < activeStars ? star: emptyStar;
                    const color = props.color || "black"
                    return React.cloneElement(icon, { style: { color: color }, key: index })
                })}
            </div>
        )
}

export default Rating;