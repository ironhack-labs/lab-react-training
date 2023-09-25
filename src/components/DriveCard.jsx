// import React from "react";
// import Rating from "./Rating";

// function DriveCard(props) {
//   const { name, rating, img, car } = props;
//   let newRating = Math.round(rating);

//   return (
//     <div>
//       <div className="drive-card">
//         <div className="driver">
//           <div>
//             <img
//               src={img}
//               alt="this is the alt"
//               style={{ height: "150px", width: "150px", borderRadius: "150px" }}
//             />
//           </div>
//           <div style={{ color: "white" }}>{name}</div>

//           <div>
//             <Rating> {newRating}</Rating>
//           </div>
//           <h2>
//             {car.model}-{car.licensePlate}
//           </h2>
//         </div>

//         {name}
//         {rating}
//         <div className="drivecard-car">
//           {car.model} {car.licensePlate}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DriveCard;


import React from "react";

function DriveCard(props) {
  const { name, rating, img, car, children } = props;
  let newRating = Math.round(rating);

  return (
    <div>
      <div className="drive-card">
        <div className="driver">
          <div>
            <img
              src={img}
              alt="this is the alt"
              style={{ height: "150px", width: "150px", borderRadius: "150px" }}
            />
          </div>
          <div style={{ color: "white" }}>{name}</div>

          <div>{children}</div> 
          {/* //Rating */}
          <h2>
            {car.model}-{car.licensePlate}
          </h2>
        </div>

        {name}
        {rating}
        <div className="drivecard-car">
          {car.model} {car.licensePlate}
        </div>
      </div>
    </div>
  );
}

export default DriveCard;
