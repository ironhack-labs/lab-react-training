function Rating({ children }) {
    const fillStar = Math.round(children)
    const emptyStar = 5 - fillStar;

    //si children es menor de 0 es igual a 0
    //si no es menor pasa al otro 
    //si es mayor de 5 es igual 5 
    //si no pasa a children 
    const stars = [];//array de stars
    for (let i = 0; i < 5; i++) {
        if (i < fillStar) {//
            stars.push(<i key={i} className="fa fa-star"></i>)
        } else {
            stars.push(<i key={i} className="fa fa-star-o"></i>)
        }
    }
    return <div className="rating">
        {stars}
    </div>

}
//si i es mayor que children me pintas una negra sino blanca 
//asi en 5 vueltas

export default Rating