import React from 'react'
import '../components/IdCard.css'

class IdCard extends React.Component {
    render() {
        return(
            <div className="IdCard">
                <img className="ProfileImg" src={this.props.picture} alt={`${this.props.firstName}`}/>
                <div className ="ProfileInfo">
                    <p><b>Last Name: </b>{this.props.lastName}</p>
                    <p><b>First Name: </b>{this.props.firstName}</p>
                    <p><b>Gender: </b>{this.props.gender}</p>
                    <p><b>Height: </b>{this.props.height}</p>
                    <p><b>Birth: </b>{this.props.birth}</p>
                </div>
            </div>
        );
    }
}

export default IdCard;