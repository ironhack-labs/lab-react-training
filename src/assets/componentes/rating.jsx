function RatingStars(children) {
    //Redondeo a número entero//
    const rating = Math.round(children);
    const stars = [];//Array vacío para almacenar estrellas//
    for (let i = 1; i <= 5; i++) { //Establecemos el mín y el max de estrellas//
        if (i <= rating) {
            stars.push("★");//estrella llena html
        } else {
            stars.push("☆");//estrella vacía html
        }
    }
    return <div>
        {stars.map((stars, index) => ( //iteramos cada estrella//
            <span key={index}>
                {stars}
                {" "}
            </span> //incluimos la estrella en la etiqueta html//
        ))}
    </div>
}
export default RatingStars;