import React from 'react'

const Rating = (props) => {
    let stars = Math.round(props.children)
    let starsToShow = ''
    let starsToComplete = ''
    for (let i=0; i<stars; i++) {starsToShow += '★'}
    for (let j=0; j< (5-stars); j++) {starsToComplete += '☆'}

    return (
        <div className="Rating card mb-3 StarsSpan">
            <div className="row">
                <div className="card-body text-center">
                    <p className="StarsSpan">{starsToShow}{starsToComplete}</p>
                </div>
            </div>
        </div>
    )
}

export default Rating