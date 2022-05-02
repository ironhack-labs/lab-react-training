import './Rating.css'

function Rating({ children }) {

    let stars = parseFloat(children)
    stars = Math.round(stars)
    let text
    switch (stars) {
        case 0:
            text = <div>
                <span class='fa fa-star'></span>
                <span class='fa fa-star'></span>
                <span class='fa fa-star'></span>
                <span class='fa fa-star'></span>
                <span class='fa fa-star'></span>
            </div>
            
            break
        case 1:
            text = <div>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star'></span>
                <span class='fa fa-star'></span>
                <span class='fa fa-star'></span>
                <span class='fa fa-star'></span>
            </div>
            break
        case 2:
            text = <div>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star'></span>
                <span class='fa fa-star'></span>
                <span class='fa fa-star'></span>
            </div>
            break
        case 3:
            text = <div>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star'></span>
                <span class='fa fa-star'></span>
            </div>
            break
        case 4:
            text = <div>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star'></span>
            </div>
            break
        case 5:
            text = <div>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star checked'></span>
                <span class='fa fa-star checked'></span>
            </div>
            break
    }
    return (
        <div className="rating">
            {text}
        </div>


    )
}


export default Rating