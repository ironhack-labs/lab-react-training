import React from 'react'

const Rating = (props) => {
    var num = Math.round(props.children)
    if ( num === 0) {
        return (
            <div>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
            </div>
        )
    }
    if ( num === 1) {
        return (
            <div>
                <img src="/img/full.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
            </div>
        )
    }
    if ( num === 2) {
        return (
            <div>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
            </div>
        )
    }
    if ( num === 3) {
        return (
            <div>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
            </div>
        )
    }
    if ( num === 4) {
        return (
            <div>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
            </div>
        )
    }
    if ( num === 5) {
        return (
            <div>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
            </div>
        )
    }
}

export default Rating
