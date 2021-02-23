import React from 'react'

export default function Container(props) {
    return (
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden" key={Math.floor(Math.random() * (1 - 100) ) + 1}>
        <div className="container mx-auto px-6 flex relative py-8">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-3">
                </span>
                <h1 className="font-bebas-neue uppercase text-2xl sm:text-1xl mb-4 font-black flex flex-col leading-none dark:text-white text-gray-800">
                    {props.title}
                </h1>
                {props.content}
            </div>
        </div>
    </div>
    )
}
