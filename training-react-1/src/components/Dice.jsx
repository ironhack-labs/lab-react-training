import { useState } from "react";
import side1 from "./../assets/dice1.png"
import side2 from "./../assets/dice2.png"
import side3 from "./../assets/dice3.png"
import side4 from "./../assets/dice4.png"
import side5 from "./../assets/dice5.png"
import side6 from "./../assets/dice6.png"
import empty from "./../assets/dice-empty.png"


const Dice = () => {

    /*Constante que son las vistas del dado*/
    const sideView = [side1, side2, side3, side4, side5, side6]

    /*¿partimos de la cara vacia del dado?*/
    const [side, setSide] = useState(empty)

    /* constante random: para obtener de manera random alguna de las imágenes del dado */
    const randomView = Math.floor(Math.random() * (6 - 1) + 1)

    /*función handle que se ejecutará cuando se haga clic en la imagen del dado. 
    En esta función, actualizamos el valor de side utilizando la actualización del dado --> setSide y seleccionamos 
    una vista aleatoria utilizando randomView*/
    const handleClick = () => {
        setSide(sideView[randomView])
    }

    /*Función timsetOut ?????? */

    return (
        <div className="Dice">
            <img src={side} alt="" onClick={handleClick} />
        </div>
    )

}

// export default Dice

