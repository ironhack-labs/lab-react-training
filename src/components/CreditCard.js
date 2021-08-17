import React from 'react';


class CreditCard extends React.Component {
    render(){
        const cardStyle = {
            backgroundColor: this.props.bgColor,
            color: this.props.color,
        }

        return (
            <div className='creditCard' style={cardStyle}>
                <img ></img>
            </div>
        )
    }
}

export default CreditCard