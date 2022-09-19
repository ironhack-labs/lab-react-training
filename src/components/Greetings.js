//import React from 'react';
//function Greetings({ greetingsArray }) {
// console.log(greetingsArray);
//return (
//  <div>
// {' '}
// <p id="item-name">{greetings + ' ' + children}</p>;
///</div>
//);
//}
//export default Greetings;

function Greetings({ lang, children }) {
  let speak = '';
  if (lang === 'de') {
    return (
      <div>
        {speak}
        {children}
      </div>
    );
    //speak = 'Hallo';
  } else if (lang === 'fr') {
    return (
      <div>
        {speak}
        {children}
      </div>
    );
    //speak = 'Bonjour';
  }
}
export default Greetings;
