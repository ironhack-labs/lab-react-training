//CreditCard


    //importaciones
    import React from "react";
    
    //CreditCard
    export default function CreditCard(props) {
        
        return(
            <>
            <article>
                <ul>
                    <li>type {props.type}</li>
                    <li>number{props.number}</li>
                    <li>expirationMonth{props.expirationMonth}</li>
                    <li>expirationYear{props.expirationYear}</li>
                    <li>bank{props.bank}</li>
                    <li>owner{props.owner}</li>
                    <li>bgColor{props.bgColor}</li>
                    <li>color{props.color}</li>
                </ul>
            </article>
            </>
        )
        
    }

    



// const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color})=>{
//     const cardNumber = number
//     const numbersArray = cardNumber.toString().split('')
//     const numbersInCard = numbersArray.slice(11,15)









