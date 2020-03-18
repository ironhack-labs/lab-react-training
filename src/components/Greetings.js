import React from "react";

// const Greetings = props => {
//   return (
//     <div>
//       <form>
//         <label>
//         <Greetings lang="de">Ludwig</Greetings>
//           <input type="text" name="name" />
//         </label>
//       </form>
//     </div>
//   );
// };
const Greetings = prop => {
  let greeting = "";
  switch (prop.lang) {
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "de":
      greeting = "Hallo";
      break;
    default:
      greeting = "Hoi";
  }

  return <h1 className="greetings-card">{`${greeting} ${prop.children}`}</h1>;
};

export default Greetings;
