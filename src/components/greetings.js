import React from 'react';


class Greetings extends React.Component {
    render(){
        const pickLang=((language)=>{
            if(language === "de"){return "Hallo"}
            else if(language === "fr"){return "Bonjour"}
        })
        const {lang,children} = this.props
        return (
            <p>{pickLang(lang)} {children}</p>
      );
    }
  }



export default Greetings;