import React, { Component } from 'react'

class Greetings extends Component {
    render() {
        return (
            <div id="simple-card">
                <p>
                {(() => {
                    switch (this.props.lang){
                        case 'de':
                            return 'Hallo'
                        case 'fr': 
                            return 'Bonjour'
                        default:
                    }
                })()}
                &nbsp;{this.props.children}
                </p>
            </div>
        )
    }
}

export default Greetings