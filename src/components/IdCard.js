import React, { Component } from 'react';
import moment from 'moment';

class IdCard extends Component {
    render() {
        const { lastName, firstName, gender, height, birth, picture} = this.props;
        return(
            <div className="container-user">
                <div className="container-img">
                    {<img src={picture}></img> }
                </div>
                <div className="container-data">
                    <div>
                        <span className="title-idCard">First name: </span> {firstName}
                    </div>
                    <div>
                        <span className="title-idCard">Last name: </span> {lastName}
                    </div>
                    <div>
                        <span className="title-idCard">Gender: </span> {gender}
                    </div>
                    <div>
                       <span className="title-idCard">Height: </span>{height}
                    </div>
                    <div>
                        <span className="title-idCard">Birth:  </span>{moment(new Date(birth)).format("ddd MMM DD YYYY")}
                    </div>
                </div>
            </div>
        )
    }
}

export default IdCard;