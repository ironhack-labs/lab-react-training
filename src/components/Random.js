import React from 'react'

export default function Random({min, max}){
    const randomNum = () => {
        return Math.floor(Math.random() * ({max}-{min}+{min}))
    }
    return(<h2>Random value between {min} and {max} => {randomNum()}</h2>)}