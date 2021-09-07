import React from "react"


export default class Greetings extends React.Component {
    
    render() {
        const { lang, children } = this.props
        if ( lang  === "de") {
            return <h1>Hallo {children}</h1>
        } else {
            return <h1>Bonjour {children}</h1>
        }
    }
}
