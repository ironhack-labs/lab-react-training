import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div className="p-5">
                <a className="flex items-center" href="/">
                    <img className="h-12 w-auto sm:h-12" src="./img/rocket.svg" alt="site" />
                    <p className="text-indigo-600 ml-2 text-6xl font-bold">
                        Lab React Training <span className="text-yellow-600 ml-2 text-2xl font-bold">
                            coded by Patrick Lehmann </span>
                    </p>

                </a>
            </div>
        )
    }
}
