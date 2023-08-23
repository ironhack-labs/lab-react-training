function CreditCard(props){
    const{type, number, expirationMonth, expirationYear,bank, owner,bgColor, color} = props
    
    let hidden=[];

    function hideNum(number){

        for(let i = 0; i < number.length; i++){
            if(i < number.length-5){
                hidden.push('*')
            }
            else if(i > number.length-5){
                hidden.push(number[i])
            }
        }
        return hidden.join('')
    }

    let styling = {
        backgroundColor: bgColor,
        color: color
    }

    return(
        <div style = {styling}>
            <p>{type}</p>
            <p>{hideNum(number)}</p>
            <div>
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
            </div>
            <p>{owner}</p>            
        </div>
    )
}

export default CreditCard