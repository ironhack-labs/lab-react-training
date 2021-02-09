import React from 'react';

// function DriverCard({name, rating, img, car: {model, licensePlate}}) {
//     const styles = {
//         width: '80px',
//         height: '80px'
//     }

//     let num = Number(rating)
//     let numStars;

//     if (num >= 5) {
//         numStars = '★★★★★'
//     } else if (num >= 4) {
//         numStars = '★★★★☆'
//     } else if (num >= 3) {
//         numStars = '★★★☆☆'
//     } else if (num >= 2) {
//         numStars = '★★☆☆☆'
//     } else if (num >= 1) {
//         numStars = '★☆☆☆☆'
//     } else {
//         numStars = '☆☆☆☆☆'
//     } 

//     return (
//         <div>
//         <h3>{name}</h3>
//         <img style={styles} src={img} alt="driver pic"/>
//         <p>{model}</p>
//         <p>{licensePlate}</p>
//         <p>{numStars}</p>
//         </div>
//     )
// }

// export default DriverCard;

class DriverCard extends React.Component {
    constructor(props) {
        super(props)
        this.name = props.name;
        this.rating = props.rating;
        this.img = props.img;
        this.carModel = props.car.model;
        this.license = props.car.licensePlate;
    }
    
    setRating() {
        let num = Number(this.rating)
        let numStars;

        if (num >= 5) {
            numStars = '★★★★★'
        } else if (num >= 4) {
            numStars = '★★★★☆'
        } else if (num >= 3) {
            numStars = '★★★☆☆'
        } else if (num >= 2) {
            numStars = '★★☆☆☆'
        } else if (num >= 1) {
            numStars = '★☆☆☆☆'
        } else {
            numStars = '☆☆☆☆☆'
        }     
        return numStars;    
    }
    
    render() {
        return(
            <div>
                <h3>{this.name}</h3>
                <img style={{width: '80px', height: '80px'}} 
                src={this.img} alt={this.name}/>
                <p>{this.carModel}</p>
                <p>{this.license}</p>
                <p>{this.setRating()}</p>
            </div>
        )
    }
}

export default DriverCard;