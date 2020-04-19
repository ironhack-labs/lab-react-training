import React, { Component } from 'react';
import "./style.css";

class BoxColor extends Component {

    numberCard = (n) => {
        return n.number.substr(12);
    }

    month = (m) => {
        const {expirationMonth} = m;
        if(m.expirationMonth < 10)
            return '0'+expirationMonth
        else
            return expirationMonth
    }

    year = (y) => {
        return y.expirationYear.toString().substr(2)
    }

    render(){
        const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} = this.props;
        return (
            <div className="card"
                style={{
                    background: `${bgColor}`,
                    color: `${color}`
                    }}>
                <div className="type">
                    {type} 
                </div>
                <div className="number">
                   ···· ···· ···· {this.numberCard({number})}
                </div>
                <div className="flex">
                    <div className="expires">
                        Expires: {this.month({expirationMonth})}/{this.year({expirationYear})}
                    </div>
                    <div>
                        {bank}
                    </div>
                </div>
                <div>
                    {owner}
                </div>
            </div>
        )
    }
}

export default BoxColor;