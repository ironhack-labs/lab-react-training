function Random ({min , max}){
    
    //el tamaño del rango en el que sacaremos el num es max-min.
    //buscaremos unnum aleatorio entre UNO y el tamaño del rango y luego le sumaremos el MIN.
   
    const randomNumber = Math.round((Math.random()*(max-min)) + min)
    
    return (
        <div>
            <h3>Random value between {min} and {max} => {randomNumber}</h3>
        </div>
    )
}

export default Random; 