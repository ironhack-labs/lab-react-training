
export default function Rating(props) {
    // let valor = ''
    // let num = Math.random() * (5 - 0 + 1) + 0
    // let numFloat = num.toFixed(2) 

    // if(numFloat ===0){
    //     valor = props.start1
    //     return valor
    // }else if(numFloat>0 && numFloat<= 1.49){
    //     valor = props.start2
    //     return valor
    // }else if(numFloat>=1.50 && numFloat<= 2.9){
    //     valor = props.start3
    //     return valor
    // }else if(numFloat>=3 && numFloat<= 3.99){
    //     valor = props.start4
    //     return valor
    // }else if(numFloat>=4.01 && numFloat<= 5){
    //     valor = props.start5
    //     return valor
    // }
    return (

        <p>Valor: {props.children} Starts: {props.star}</p>

    )
}
