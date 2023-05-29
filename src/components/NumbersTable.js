import { nanoid } from "nanoid";

export function NumbersTable({limit}){
    const numbers = [];
    for(let i = 1; i <= limit; i++){
        numbers.push(i);
    }
  return(
   <div className="d-flex">
     {numbers.map((item) => {
        return item % 2 === 1 ?   <div key={nanoid()} className="p-3 px-4 border border-dark">{item}</div> : <div key={nanoid()} className="p-3 px-4 border border-dark" style={{backgroundColor: 'red'}}>{item}</div>;
     })}
   </div>
  );
}