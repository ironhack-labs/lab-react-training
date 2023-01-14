import '../style/Rating.css'


function Rating(props) {

    const value = props.children;

    // version one with font-awesome library
    // let checkArray = []
    // if (value < 0.5) {
    //     checkArray = ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star']
    // } else if (value < 1.5) {
    //     checkArray = ['fa fa-star checked', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star']
    // } else if (value < 2.5) {
    //     checkArray = ['fa fa-star checked', 'fa fa-star checked', 'fa fa-star', 'fa fa-star', 'fa fa-star']
    // } else if (value < 3.5) {
    //     checkArray = ['fa fa-star checked', 'fa fa-star checked', 'fa fa-star checked', 'fa fa-star', 'fa fa-star']
    // } else if (value < 4.5) {
    //     checkArray = ['fa fa-star checked', 'fa fa-star checked', 'fa fa-star checked', 'fa fa-star checked', 'fa fa-star']
    // } else if (value < 5.5) {
    //     checkArray = ['fa fa-star checked', 'fa fa-star checked', 'fa fa-star checked', 'fa fa-star checked', 'fa fa-star checked']
    // }

    // version two with for loop    
    let stars = ''
    for (let i = 0; i < 5; i++) {
        if (Math.round(value) > i) {
            stars += '★'
        }
        else {
            stars += '☆'
        }
    }

    return (
        <div className="rating-section">
            {/* VERSION ONE */}
            {/* <span className={checkArray[0]}></span>
                <span className={checkArray[1]}></span>
                <span className={checkArray[2]}></span>
                <span className={checkArray[3]}></span>
                <span className={checkArray[4]}></span> */}
            {/* Version two */}
            <p>{stars}</p>
        </div>
    )
}


export default Rating