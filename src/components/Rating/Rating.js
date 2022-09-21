import './Rating.css'

function Rating({children}) {
    const rate = Math.round(children); //esto redondea el numero
    const ws = 5 - rate; // -5 xq son 5 estrellas
    return(
    <div className="stars">
     {'★'.repeat(rate) + '☆'.repeat(ws)}
    </div>
 )
}

export default Rating

//<Rating>0</Rating> 5 - 0  = -5 = 5 blancas
//<Rating>1.49</Rating> 5 - 1.49 = 4 blancas 1 negra
//<Rating>1.5</Rating>
//<Rating>3</Rating>
//<Rating>4</Rating>
//<Rating>5</Rating>