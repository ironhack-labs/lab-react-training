import React  from "react";
import './CreditCard.css'

class CreditCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            type : props.type
        }
    }
    
    render(){
        return(
            
        
        <div className = {`${this.props.color} all-cards`} style = {{backgroundColor: this.props.bgColor}} >
            {this.state.type === 'Visa' ?
             <img className = 'logo ' src  = 'https://tse3.mm.bing.net/th?id=OIP.xVREsbEnxpFwYsgl4hNO7QHaDA&pid=Api&P=0&w=411&h=168'></img>:
             <img className = 'logo ' src = 'https://tse2.mm.bing.net/th?id=OIP.pxu83iNpLj7z6W4HXXKqYAHaHa&pid=Api&P=0&w=300&h=300'></img>
            }
            <div className = {this.state.type}>
            <div >{this.props.number}</div>
            <div>
                <p>Expires {this.props.expirationMonth}/{this.props.expirationYear} <span>{this.props.bank}</span></p> 
                <p>{this.props.owner} </p>
            </div>

            </div>
            
        </div>
    )}
}


export default CreditCard