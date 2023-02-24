import './styles/Rating.css'

export default function Rating(props){

    let stars = Math.round(props.children);
    let starsStr = "";

    switch(stars){
        case 1:
            starsStr = "★☆☆☆☆";
            break;
        case 2:
            starsStr = "★★☆☆☆";
            break;
        case 3:
            starsStr = "★★★☆☆";
            break;
        case 4:
            starsStr = "★★★★☆";
            break;
        case 5:
            starsStr = "★★★★★";
            break;
        default:
            starsStr = "☆☆☆☆☆"; 
            break;
    }


    return(
        <div className="ratingContainer">
            <span>{starsStr}</span>
        </div>
    )
}