import React from 'react';

// function Greetings({lang, children} ) {

//     if (lang === 'en') {
//         return `Hello ${children}`
//     } else if (lang === 'fr') {
//         return `Bonjour ${children}`
//     } 

        //otra forma de pasarle lang de forma dinámica. 
        //const greetings = {
        //     en: "Hello", 
        //     fr: "Bonjour",
        // }
        // constr greet = greetings[lang]
        // return `{greet}{children}`

//     return (
//         <div>
//             <p>{lang}</p>
//         </div>
//     )
// }

// export default Greetings;

class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.lang = this.props.lang;
        this.children = this.props.children;
    }


    sayHello(lang) {
        if (lang === 'en') {
            return `Hello ${this.children}`
        } else if (lang === 'fr') {
            return `Bonjour ${this.children}`
        } 
    }


    render() {
        return (
            <div>
                <p>{this.sayHello(this.lang)}</p>
            </div>
        )
    }
}

export default Greetings;