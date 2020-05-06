import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const IdCard = (props) => {
  return (
    <Card style={{ width: 500, marginTop: 16 }}>
      <Meta
        avatar={<Avatar src={props.picture} />}
        title={`Name: ${props.firstName}  ${props.lastName}`}
        description={`Gender: ${props.gender}
        Height: ${props.height}
        Birth: ${props.birth}`}
      />
    </Card>
  );
};

export default IdCard;
