import React from "react";

class IdCard extends React.Component {

    formatDate = (date) => {

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        if (month < 10){
            return (`${day}-0${month}-${year}`)
        } else {
            return (`${day}-${month}-${year}`)
        }
    }

    render() {
        return (
            <div className="box-idCard">
                <img src={this.props.picture} alt="user´s face"/>
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
                        {this.formatDate(this.props.birth)}
                    </p>
                </div>  
            </div>
        )
    }
}

export default IdCard;