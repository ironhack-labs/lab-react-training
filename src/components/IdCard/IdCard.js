import React  from 'react';

// function IdCard({lastName, firstName, gender, height, birth, picture}) {
//     return (
//         <div>
//             <p>{firstName} {lastName} </p>
//             <p>{gender}</p>
//             <p>{height} </p>
//             <p>{birth}</p>
//             <img src={picture} alt="pic"/>
//         </div>
//     );
// }

// export default IdCard

class IdCard extends React.Component {
    constructor(props) {
        super(props) 
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.gender = props.gender;
        this.height = props.height;
        this.birth = props.birth;
        this.picture = props.picture;
    }

    render() {
        return (
        <div>
            <p>{this.firstName} {this.lastName}</p>
            <img src={this.picture} alt={`${this.firstName}${this.lastName}`}/>
            <p>{this.gender}</p>
            <p>{this.height}</p>
            <p>{this.birth}</p>
        </div>
        )
    }
}

export default IdCard;