import React from 'react';

 const checkLanguage = (language) => {
   switch (language) {
     case 'de':
       return 'Hallo';
       break;
     case 'fr':
       return 'Bonjour';
       break;
     case 'es':
       return 'Hola';
       break;
     default:
       return 'Hi';
   }
 };

 class Greetings extends React.Component {
   render() {
     return (
       <div class="greetings-box">
         {checkLanguage(this.props.lang)} {this.props.children}{' '}
       </div>
     );
   }
 }

 export default Greetings;