import { nanoid } from "nanoid";

export function Rating({children}){
   let activeRating = [...Array(Math.round(children))]
   let emptyRating = [...Array(5 - activeRating.length)];

   return(
    <div className="fs-3 d-flex flex-start">
    <div>
   {activeRating.map((post) => (
    <i key={nanoid()} className="fa-solid fa-star"></i>
   ))}
    {emptyRating.map((rating) => (
        <i key={nanoid()} className="fa-regular fa-star"></i>
    ))}
    </div>
    </div>
   );
}