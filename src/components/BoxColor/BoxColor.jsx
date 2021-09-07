import React from "react"
// import { render } from "react-dom"

export default class BoxColor extends React.Component{
    render(){
        const { r, g, b } = this.props
        return (
            <p>rgb({r},{g},{b})</p>
        )
    }

}