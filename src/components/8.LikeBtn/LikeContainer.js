import React from 'react'
import LikeButton from './LikeButton'
import './Like.scss'

const LikeContainer = () => {

    return (
        <div className="LikeContainer">
            <LikeButton />
            <LikeButton />
            <LikeButton />
            <LikeButton />
        </div>
    )
}

export default LikeContainer
