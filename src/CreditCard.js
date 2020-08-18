import React from 'react'

export default function CreditCard(props) {

    let creditCards={
        display:'flex',
        position:'relative',
        flexDirection:'row',
        width:'308.16px',
        height:'194.33px',
        background:props.bgColor,
        margin:'10px',
        borderRadius:'10px',
    }
    let numberCredit={
        display:'flex',
        flexDirection:'row',
        fontSize:'25px',
        color:props.color,
        justifyContent:'center',
        marginTop:'70px',
        marginLeft:'50px'
    }
    let logos={
        display:'flex',
        flexDirection:'row',
        position:'relative',
        width:'40px',
        height:'15px',
        marginLeft:'250px',
        paddingTop:'15px',
    }
    let containerlogo={
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        marginBottom:'100px'
    }
    let cardDetails ={
        display:'flex',
        flexDirection:'row',
        fontSize:'17px',
        color:props.color,
        marginTop:'100px',
    }
    let containerDetails ={
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        marginTop:'25px',
        marginLeft:'10px',
    }



    return (
        <div >
            <div style={creditCards}>
                <div style={containerlogo}>
                    <img style={logos} src={props.type}/>
                </div>
                <p style={numberCredit}>**** **** **** {props.number.slice(11)}</p>
                <div style={containerDetails}>
                <p style={cardDetails}>Expires 0{props.expirationMonth}/{props.expirationYear.toString().slice(2)} &nbsp;&nbsp;&nbsp; {props.bank}<br>
                    </br>{props.owner}
                </p>
                </div>
            </div>
        </div>
    )
}
