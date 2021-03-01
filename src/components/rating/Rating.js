function Rating(children){

    let rate = children

    let rating = Math.round(rate.children)

    let stars = '☆☆☆☆☆'

    switch (rating){
        case 5:
            stars = '★★★★★'
            break;
        case 4:
            stars = '★★★★☆'
            break;
        case 3:
            stars = '★★★☆☆'
            break;
        case 2:
            stars = '★★☆☆☆'
            break;
        case 1:
            stars = '★☆☆☆☆'
            break;
        default:
            stars = '☆☆☆☆☆'
            break;
    }

    return(
        <div className="d-flex flex-row justify-content-between align-items-center ">   
            <h1 className="mx-auto">{stars}</h1>
        </div>
    );
}

export default Rating;