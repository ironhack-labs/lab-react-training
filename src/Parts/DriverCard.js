
import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {
  return (
    <div>
      <div className="driver">
            <div className="avatar">
                <div className="row">
                    <div className="col-md-4">
                        <img src={props.img} alt=""/>
                    </div>
                    <div className="col-md-8">
                        <h4>{props.name}</h4>
                        <div>
                            <Rating>{props.rating}</Rating>
                        </div>
                        <br/>
                        <div style={{ marginTop: '-20px' }}>
                            {props.car.model} - {props.car.licensePlate}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
    </div>
  )
}
