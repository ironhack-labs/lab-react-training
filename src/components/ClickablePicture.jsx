// // first option passing a handle function with if/else to the onClick()

// import { useState } from 'react';

// function ClickablePicture(props) {
//   const [toggle, setToggle] = useState(false);

//   const handleToggle = () => {
//     if (!toggle) {
//       setToggle(true);
//     } else if (toggle) {
//       setToggle(false);
//     }
//   };

//   return (
//     <div className="toggle-img">
//       <img
//         onClick={handleToggle}
//         src={!toggle ? props.img : props.imgClicked}
//         alt="man"
//       />
//     </div>
//   );
// }

// export default ClickablePicture;

// <==============  =============================>

// second option using arrow function with ternary conditional inside of onClick() and passing directly the setToggle()!

import { useState } from 'react';

function ClickablePicture(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <img
        className="toggle-img"
        onClick={() => {
          !toggle ? setToggle(true) : setToggle(false);
        }}
        src={!toggle ? props.img : props.imgClicked}
        alt="man"
      />
    </div>
  );
}

export default ClickablePicture;
