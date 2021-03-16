import React, {Component} from 'react';

 class Greetings extends Component{
     render() {
         if (this.props.lang === "de"){
             return (
             <h1>Hallo {this.props.children}</h1>
             )
         } else if (this.props.lang === "fr"){
             return(
             <h1>Bonjour {this.props.children}</h1>
             )
         } else if (this.props.lang === "es") {
             return (
                 <h1>Holla {this.props.children}</h1>
             )
         } else if (this.props.lang === "en") {
             return (
                 <h1>Hello {this.props.children}</h1>
             )
         }
     }
 }
 export default Greetings 

// const langs = {
//     de: 'guten tag',
//     en: 'hello',
//     fr: 'bonjour',
//     es: 'ola',
// };
// langs corresponding to de en fr es and children corresponding to greetings..
// function Greetings ({lang, children}) {
//     return (
//         <div className="Greetings">
//             {langs[lang]} {children}
//         </div>
//     );
// }