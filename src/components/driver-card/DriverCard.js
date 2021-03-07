

function DriverCard({name, rating, img, car}) {



    const rate = Number(rating);
    let startRate = '';
 
    for(let i = 0; i < 5; i++) {
 
         if (rate > i) {
             startRate += '★';
         } else{
             startRate += '☆';
         }
 
    }
 
 
     return (
         <div className="card text-white bg-primary max-card-width" >
             <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <img className="rounded-circle circle-img-width" src={img} alt={img} /> <h5 className="card-title">{startRate}</h5>
                <p className="card-text">{car.model} {car.licensePlate}</p>
             </div>
         </div>
     );
 }
 
 export default DriverCard;