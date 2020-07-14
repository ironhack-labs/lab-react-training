import React from 'react'

export default function Carousel(props) {
    return (
        <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-15" src={props.imgs[1]} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-15" src={props.imgs[0]} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-15"src={props.imgs[2]} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-15"src={props.imgs[3]} alt="Fourth slide"/>
          </div>
        </div>
      </div>
    );
}
