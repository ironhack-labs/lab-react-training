import React from 'react';

class IdCard extends React.Component{
    constructor(props){
        super(props);
        this.firstName = this.firstName;
        this.lastName = this.lastName;
        this.gender = `" "?"male":"female"`;
        this.height = Number;
        this.birth = this.birth;
        this.picture = this.picture;
    }

    render(){
        return(
            <div className="profile">
                <img src={this.props.picture}></img>

                <div className="infos">

                    <div><b>First name: </b>{this.props.firstName}</div>
                    <div><b>Last name: </b>{this.props.lastName}</div>
                    <div><b>Gender: </b>{this.props.gender}</div>
                    <div><b>Height: </b>{this.props.height}</div>
                    <div><b>Birth: </b>{this.props.birth.toDateString()}</div>

                </div>
            </div>
        )
    }
}

export default IdCard;