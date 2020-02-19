import React, { Component } from 'react'

export default class Greetings extends Component {
    render() {
        return (
            <div style={{
                background:'#b9cced', 
                width:'90%', 
                margin:'25px', 
                border:'2px solid balck',
                borderRadius:'20px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <h3>{

                    (()=>{
                        switch(this.props.lang){
                            case 'de':
                            return 'Hallo '
                            case 'fr':
                            return 'Bonjour '
                            case 'en':
                            return 'Hello '
                            case 'es':
                            return 'Hola '
                            default:
                            return 'Hola'
                        }
                    })()
                    

                    }
                     {this.props.children}</h3>
            </div>
        )
    }
}
