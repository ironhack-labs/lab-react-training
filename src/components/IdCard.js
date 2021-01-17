import React from 'react'

class IdCard extends React.Component {
    render() {
        return(
            <div className="">
                <img src={this.props.picture} alt={`${this.props.firstName}-${this.props.lastName}`}/>
                <div>
                    {/* <p>Last Name: {this.props.lastName}</p>
                    <p>First Name: {this.props.firstName}</p>
                    <p>Gender: {this.props.gender}</p>
                    <p>Height: {this.props.height}</p> */}
                    <p>Birth: {this.props.birth}</p>
                </div>
            </div>
        );
    }
}

export default IdCard;