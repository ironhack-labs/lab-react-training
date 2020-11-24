import React from 'react';
import Rate from './Rating'

export const Driver = (props) => {
    const star= (stars)=>{
        let rate= Math.round(stars)
         let count=[];
         let empty= 5-rate
         let none=[]
         let all=[]
         for(let i=0; i<rate; i++){
             count.push('★')
         }
         for(let i=0; i<empty; i++){
            console.log(empty)
            none.push('☆')
        }
        return  count + none
    }
    return (
        <div className="driver-container">
            <img src={props.img} className="img-driver"/>
                <div className="driver-content">
                <h1>{props.name}</h1>
                <h2> {star(props.rating)}</h2>
                <h2> {props.car.model}
                {props.car.licensePlate}</h2>
            </div>
        </div>
    )
}

export default function DriverCard(){
    return (
        <div>
        <Driver
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
                model: "Toyota Corolla Altis",
                licensePlate: "CO42DE"
            }} />
            <Driver
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
                model: "Audi A3",
                licensePlate: "BE33ER"
  }} />
        </div>
    )
}