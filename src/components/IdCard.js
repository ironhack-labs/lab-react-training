import '../App.css';

const { Component } = require("react");

class IdCard extends Component {
    render() {
        return (
            <div className="id-card">
                <img src={this.props.picture} alt="user-pic"/>
                <div>
                    <strong>First name</strong>: {this.props.firstName} <br/>
                    <strong>Last name</strong>: {this.props.lastName} <br/>
                    <strong>Gender</strong>: {this.props.gender} <br/>
                    <strong>Height</strong>: {this.props.height / 100}m <br/>
                    <strong>Birth</strong>: {this.props.birth.toDateString()} <br/>
                </div>
            </div>
        );
    };
};

export default IdCard;