const Rating = (props) => {

    const { rating } = props;

    if(Math.round(rating) === 0){
        return <div>
           <img src="./star-regular.svg" width="20px"></img>
           <img src="./star-regular.svg" width="20px"></img>
           <img src="./star-regular.svg" width="20px"></img>
           <img src="./star-regular.svg" width="20px"></img>
           <img src="./star-regular.svg" width="20px"></img>
           </div>
    } else if(Math.round(rating) === 1){
           return <div>
           <img src="./star-solid.svg" width="20px"></img>
           <img src="./star-regular.svg" width="20px"></img>
           <img src="./star-regular.svg" width="20px"></img>
           <img src="./star-regular.svg" width="20px"></img>
           <img src="./star-regular.svg" width="20px"></img>
           </div>
     } else if(Math.round(rating) === 2){
        return <div>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-regular.svg" width="20px"></img>
       <img src="./star-regular.svg" width="20px"></img>
       <img src="./star-regular.svg" width="20px"></img>
       </div>
     } else if(Math.round(rating) === 3){
       return <div>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-regular.svg" width="20px"></img>
       <img src="./star-regular.svg" width="20px"></img>
       </div>
    } else if(Math.round(rating) === 4){
        return <div>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-regular.svg" width="20px"></img>
       </div>
     } else if(Math.round(rating) === 5){
        return <div>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-solid.svg" width="20px"></img>
       <img src="./star-solid.svg" width="20px"></img>
       </div>
     }
    
}

export default Rating;