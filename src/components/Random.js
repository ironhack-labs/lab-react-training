import React from 'react'
import '../components/Random.css'

class Random extends React.Component {
    render() {

        let random = Math.floor(Math.random()*(this.props.max-this.props.min)+this.props.min)

        return (
            <div>
            <p>{`Random value between ${this.props.min} and ${this.props.max} => ${random}`}</p>
            </div>
        )

    }
}

export default Random;