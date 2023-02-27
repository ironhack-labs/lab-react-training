import React from 'react';
import { Card, Space } from 'react';

export const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  const formattedBirth = birth.toLocaleDateString();
  return (
    <Space direction="vertical" size={16}>
      <Card title="ID Card">
        <img src={picture} alt={firstName} />

        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height} cm</p>
        <p>Birth Date: {formattedBirth}</p>
      </Card>
    </Space>
  );
};
export default IdCard;