// imports 
import React from 'react'


//components
class Greetings extends React.Component{
    checkLang(lang){
        let g = ''
        if(lang==='de'){
            g='Hallo'
        }else if(lang==='en'){
            g='Hello'
        }else if(lang==='fr'){
            g='Bonjour'
        }else if(lang==='es'){
            g='Hola'
        }
        return g
    }
    render(){
        console.log(this.props)
        const {lang, children} = this.props
        return(
            <div className='card'>
                <p>{this.checkLang(lang)} {children}</p>
            </div>
        )
        }
}





// exports
export default Greetings;