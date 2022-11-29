function Rating(props){

    let number = Math.round(props.children);
    let display = "";

    switch (number){
        case 0:
            display = "☆☆☆☆☆";
            break;
        case 1: 
            display = "★☆☆☆☆";
            break;
        case 2: 
            display = "★★☆☆☆";
            break;
        case 3: 
            display = "★★★☆☆";
            break;
        case 4: 
            display = "★★★★☆";
            break;
        case 5: 
            display = "★★★★★";
            break;
    }

    return(
        <div><p>{display}</p></div>
    )
};

export default Rating;