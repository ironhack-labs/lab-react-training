

function Rating({children}) {

   const rate = Number(children);
   let startRate = '';

   for(let i = 0; i < 5; i++) {

        if (rate > i) {
            startRate += '★';
        } else{
            startRate += '☆';
        }

   }


    return (
        <div className="card max-card-width" >
            <div className="card-body">
                <h5 className="card-title">{startRate}</h5>
            </div>
        </div>
    );
}

export default Rating; 