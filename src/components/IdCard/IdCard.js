import React from 'react';
import './IdCard.css';

class IdCard extends React.Component {
    render() {
        return(
            <div id="card">
                <div className="card-content">
                    <div>
                        <img className="card-image" src={this.props.image} />
                    </div>
                    <div className="card-description">
                        <p>First name: {this.props.firstName}</p>
                        <p>Last name: {this.props.lastName}</p>
                        <p>Gender: {this.props.gender}</p>
                        <p>Height: {this.props.height}</p>
                        <p>Birthday: {this.props.birthday}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export {IdCard};