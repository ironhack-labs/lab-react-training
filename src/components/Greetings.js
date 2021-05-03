import React from 'react'

class Greetings extends React.Component{

    checkLang(language, children){
        if (language === "de"){
            return `Hallo ${children}`
        } else if (language === 'en'){
            return `Hello ${children}`
        } else if (language === 'es'){
            return `Hola ${children}`
        } else if (language === 'fr'){
            return `Bonjour ${children}`
        }
    }

    render(){
        const {lang, children} = this.props;
        return(
            <div>
                <h2>{this.checkLang(lang, children)}</h2>
            </div>
        )
    }
}

export default Greetings