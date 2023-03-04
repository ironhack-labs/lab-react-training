function Rating({children}){
    
    let avaliacao = '';
    let estrelasVazias = (Math.round(children) - 5)*-1;
    for(let i = 0; i < Math.round(children) ; i++){
        avaliacao += '★';  
    }
    for(let i = 0; i < estrelasVazias; i++){
        avaliacao += '☆';  
    }
    return (
        <div>
            <p>
            {avaliacao}
            </p>
        </div>
    )
}

export default Rating;