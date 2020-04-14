import React, { Component, createElement } from 'react'

class Tables extends Component {
    paint = () => {
        const element = React.createElement('div', { className: 'table' }, "1");

    }


    render() {
        this.paint()
        return (
            <div className="container">

                <element />
            </div>
        )
    }
}

export default Tables