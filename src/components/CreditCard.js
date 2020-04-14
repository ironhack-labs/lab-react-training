import React, { Component } from 'react';
import '../index.css';

class CreditCard extends Component {

    style = {

        backgroundColor: `${this.props.bg}`,
        color: `${this.props.color}`,

    }

    image = {
        visa: '/img/visa.png'

    }

    setImg() {

        if (this.props.type === "Visa") {
            this.image =
                '/img/visa.png'

        } else if (this.props.type === "Master Card") {
            this.image =
                '/img/master-card.svg'
        }
    }

    setDots() {

        this.number = this.props.number

        // for (let index = 0; index < this.number.length - 4; index++) {

        //     this.number[index]  = "a"
        // }
    }


    render() {
        this.setImg()
        this.setDots()
        return (

            <div style={this.style} className="visa">
                <img alt={this.props.type} src={this.image} />
                {this.image.visa}

                <p className="number">{this.number}</p>
                <p className="bottext"> Expires {this.props.expirationMonth}/{this.props.expirationYear} <span className="bottext"> {this.props.bank}</span>  </p>
                <span className="bottext"> {this.props.owner}</span>
            </div>

        )


    }



}

export default CreditCard