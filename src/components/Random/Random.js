import React from 'react';

// function Random({min, max}) {
//     console.log("min", min)
//     console.log('max', max)
//     let randomNum = Math.random() * (max-min)+min
    
//     return (
//         <div>
//             <p>Random value between {min} and {max} : { randomNum }</p>
//         </div>
//     )
// }

// export default Random;

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.min = props.min;
        this.max = props.max;
    }

    setRandomNum(min, max) {
        let randomNum = Math.random()*(max - min) + min;
        return randomNum;
    }

    render() {
        return (
            <div>
                <p>Random value between {this.min} and {this.max} : { this.setRandomNum(this.min, this.max) }</p>
            
            </div>
        )
    }
}

export default Random;