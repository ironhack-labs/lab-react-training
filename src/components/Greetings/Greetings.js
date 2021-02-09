import React from 'react';

// const Greetings = ({ lang,children}) => {

//   let hello = '';

//   switch(lang){
//     case 'es':
//         hello = 'Hola';
//         break;
//     case 'de':
//         hello = 'Hallo';
//         break;
//     case 'en':
//         hello = 'Hello';
//         break;
//     case fr:
//         hello = 'Bonjour';
//         break;
//   }

//   return (
//     <article className="greeting">
//       <p><span>{hello}</span> {children}</p>

//     </article>
//   );
// };

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.greetings = {
      en: 'Hello',
      de: 'Hallo',
      es: 'Hola',
      fr: 'Bonjour',
    };
    this.hello = this.greetings[props.lang];
    this.children = this.props.children;
  }

  render() {
    return (
      <article className="greeting">
        <p>
          <span>{this.hello}</span> {this.children}
        </p>
      </article>
    );
  }
}

export default Greetings;
