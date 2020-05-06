import React from 'react';
import { Rate } from 'antd';

const Rating = (props) => {
 return(
  <div>
   <Rate disabled defaultValue={Math.round(props.number)} />
  </div>
 )
}

export default Rating