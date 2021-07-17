import "./CreditCard.css"
const CreditCard = (props)=>{
    let cardType=""
    if(props.type==="Master Card"){
        cardType="img/master-card.svg"
    }
    if(props.type==="Visa"){
        cardType="img/visa.png"
    }
  
    const imgStyle ={
        width:"50px",
        height:"auto",
        position:"relative",
        top:"1.5vh",
        left:"9.5vw"
    }
    const CreditCardDiv ={
        border:"1px solid black",
        margin: "10vh 0 5vh 0",
        borderRadius: "0.8vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width:"25vw",
        height:"15vw",
        backgroundColor:props.bgColor
    }


    const cardNumber =`**** **** **** ${props.number[12]+props.number[13]+props.number[14]+props.number[15]}`

    const h1style = {
        position:"relative",
        top:"4vh"
    }
    const spanStyle ={
        position:"relative",
        left:"4vh"
    }
    
    return (
        <div style={CreditCardDiv}>
            <img src={cardType} style={imgStyle} alt={props.type}/>
            <h1 style={h1style}>{cardNumber}</h1>
            <p>Expires: {props.expirationMonth}/{props.expirationYear-2000}<span style={spanStyle}>{props.bank}</span><br/><br/>{props.owner}</p>
           

        </div>
    )
}

export default CreditCard 