import React from 'react'
import { Card, Avatar } from 'antd';
import { Rate } from 'antd';

const { Meta } = Card;



const Driver = (props) => {
 return(
  <Card
    key= {props.id}
    style={{ width: 300, marginTop: 16 }}>
      <Meta
        avatar={<Avatar src={props.img} />}
        title={props.name} />
        <Rate disabled defaultValue={Math.round(props.rating)} />
        <Meta description={`${props.car.model} - ${props.car.licensePlate}`}
      />
   </Card>
 )
}

export default Driver