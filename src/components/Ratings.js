import React, { Component } from 'react'


class Ratings extends Component {

    stars() {
        let cant = 0;
        for (let index = 0.00; index < this.props.children; index += 0.50) {



            cant++


        }
        let dif = this.props.children - cant / 2;

        if (dif !== 0) {
            cant -= 1;
        }
        let star = " "
        for (let i = 0; i < cant / 2; i++) {



            star += " ☆";


        }
        this.state = star;

        // if (this.state < 0.49) {
        //     this.state = "☆☆☆☆☆"
        // }
    }



    render() {
        this.stars()
        return (<div className="start">


            {this.props.children}  +  {this.state}

        </div>
        )


    }

}

export default Ratings;