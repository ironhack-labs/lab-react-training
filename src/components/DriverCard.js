import React from 'react';
import Rating from './Rating';

function DriverCard(props){
    return (
        <div className="DriverCard">
          <img className="left" src={props.img} alt=""/>
          <div className="right">
            <h2>{props.name}</h2>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>
          </div>
        </div>
      );
    }

//https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-0/p206x206/75223831_2574866019203215_806700497204412416_o.jpg?_nc_cat=110&_nc_sid=e33968&_nc_ohc=erjCEpNwA0gAX-7_W1Z&_nc_ht=scontent.fcgh37-1.fna&_nc_tp=6&oh=9eef0585dc1c870c93f707551a4ca22f&oe=5F3E927B
export default DriverCard;