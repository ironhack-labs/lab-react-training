export function Random({min, max}){
 let randomValue = Math.floor(Math.random() * (max - min + 1)) + min
 return(
    <div className="border border-dark p-1 text-start">
        <p>Random value between {min} and {max} => {randomValue}</p>
    </div>
 );
}