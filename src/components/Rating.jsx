function Rating(props){
    
    const {children} = props;

    function rateIt(){
        if (children <= 0.49) {
            return "☆☆☆☆☆";
        } else if (children <= 1.49) {
            return "★☆☆☆☆";
        } else if (children <= 2.49) {
            return "★★☆☆☆";
        } else if (children <= 3.49) {
            return "★★★☆☆";
        } else if (children <= 4.49) {
            return "★★★★☆";
        } else {
            return "★★★★★";
        }
    }


    return(
        <div className="rate-stars">
            <p>{rateIt()}</p>
        </div>
    )
}

export default Rating;