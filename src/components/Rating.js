import React from 'react'
import '../assets/css/Rating.css'

const Rating = ({ children }) => {

    const stars = () => {
        const rate = Math.round(Number(children))
        switch (rate) {
            case 0:
                return '☆☆☆☆☆'
            case 1:
                return '★☆☆☆☆'
            case 2:
                return '★★☆☆☆'
            case 3:
                return '★★★☆☆'
            case 4:
                return '★★★★☆'
            case 5:
                return '★★★★★'
        }
    }




return (
    <div className="Rating">{ stars() }</div>
)
}

export default Rating