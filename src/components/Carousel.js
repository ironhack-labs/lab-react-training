import React from 'react'

export default class Carousel extends React.Component {
    state = {
        position: 0
    }

    clickLeft = () => {
        if (this.state.position > 0) {
            this.setState((state) => ({
                position: state.position - 1,
            }));
        }
    };

    clickRight = () => {
        if (this.state.position < 3) {
            this.setState((state) => ({
                position: state.position + 1,
          }));
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.clickLeft}>
                    Left
                </button>

                <img src={this.props.imgs[`${this.state.position}`]} alt="random person" />
        
                <button onClick={this.clickRight}>
                    Right
                </button>

            </div>
        )
    }
}





// state = {
//     clicked: false,
//     imageNumber: 0,
// }

// clickHandler = () => {
//     this.setState((state,props) => ({
//         clicked: false,
//         imageNumber: state.imageNumber +1
//     }))
//     console.log(this.state.imageNumber)
//     // // num++
//     // let imgs= `{this.props.imgs[${this.state.imageNumber}]}`
//     // console.log(imgs)
//     // return imgs
// }



// render() {
//     return (
//         <div>
            
//             <button onClick = {this.clickHandler}>
//                 left
//             </button>

//             {/* <img src={imgs} alt="random people"/> */}

//             <img alt="random people"
//             src= {this.state.clicked
//             ? `{this.props.imgs[${this.state.imageNumber}]`
//             : 'https://randomuser.me/api/portraits/women/1.jpg' }/>

            
//             <button onClick = {this.clickHandler}>
//                 right
//             </button>
//         </div>
//     )
// }
