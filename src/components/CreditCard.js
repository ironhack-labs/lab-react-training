import React from 'react'
import '../components/CreditCard.css'


class CreditCard extends React.Component {
    render() {

        const myStyle = {
            "backgroundColor": `${this.props.bgColor}`,
            "color": `${this.props.color}`,
            "width": "500px",
            "height": "300px",
            "border-radius": "15px",
            "margin": "20px",
            "display": "flex",
            // "justify-content": "center",
            // "align-items": "center",
            "flex-direction": "column"
        }

        // if (this.props.type="Visa") {
        //     return <img className="visaCard" src={this.props.picture} alt={`${this.props.type}`}/>
        // } else if (this.props.type="Master Card") {
        //     return <img className="visaCard" src={this.props.picture} alt={`${this.props.type}`}/>
        // }


        let imgCard = ""

        if (this.props.type === 'Visa') {
            imgCard = <img className = "CardLogo" src = {'../img/visa.png'} />
        } else {
            imgCard = <img className = "CardLogo" src = {'../img/master-card.svg'}/>
        }

        let visibleCardNum = this.props.number.slice(12,16)

        return (
        <div style={myStyle}>
                <div className = "ImageContainer">
                    {imgCard}
                </div>
            <div>
                
                <div className = "CardNum">
                    <h1><b>•••• •••• •••• {visibleCardNum}</b></h1>
                </div>
                <div className = "CardInfo">
                    <p className = "Exp">Expires: {this.props.expirationMonth}/{this.props.expirationYear}</p>
                    <p>{this.props.bank}</p>
                </div>
                    <p className = "Owner">{this.props.owner}</p>
                
            </div>
        </div>
        )
        
    }
}


export default CreditCard