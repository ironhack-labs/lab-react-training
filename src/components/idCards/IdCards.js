import React from "react";

class IdCard extends React.Component {
    render() {
        return (
            <div className="box-idCard">
                <img src="{props.picture}" alt="user´s face"/>
                <div>
                    <p>
                        <strong>First Name:</strong>
                        {this.props.firstName}
                    </p>
                    <p>
                        <strong>Last Name:</strong>
                        {this.props.lastName}
                    </p>
                    <p>
                        <strong>Gender:</strong>
                        {this.props.gender}
                    </p>
                    <p>
                        <strong>Height:</strong>
                        {this.props.height / 100} m
                    </p>
                    <p>
                        <strong>Birth:</strong>
                        {this.props.birth}
                    </p>
                </div> 
            </div>
        )
    }
}

export default IdCard;