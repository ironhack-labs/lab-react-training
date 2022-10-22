function Rating(props) {

    let unroundedStarNum = props.children;
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
        <div className="test">
            {starArray}
         
        </div>
    );
};


export default Rating;
