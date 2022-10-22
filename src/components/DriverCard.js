function DriverCard(props) {

    let unroundedStarNum = props.rating;
    let roundedStarNum = Math.round(unroundedStarNum);
    let emptyStarNum = 5 - roundedStarNum;
    const starArray = [];

    for (let i = 0; i < roundedStarNum; i++) {

        starArray.push(<div>★</div>);
    }

    for (let i = 0; i < emptyStarNum; i++) {

        starArray.push(<div>☆</div>);
    }
    return(
        <div>
        <img src={props.img} />
         <p>{props.name}</p>
         <p>{starArray}</p>
         <p>{props.car.model}</p>
         <p>{props.car.licensePlate}m</p>
        </div>
    );
};


export default DriverCard;
