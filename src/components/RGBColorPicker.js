import { Form, InputNumber, Button, Select, Row, Col, Typography } from 'antd';
import React, { useState } from 'react';

const RGBPicker = () => {
  const [form] = Form.useForm();
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);
  const [rgb, setRgb] = useState();

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: `rgb(${rValue},0,0)`,
            width: '50px',
            height: '50px',
            margin: '20px',
          }}
        ></div>
        <div style={{ margin: '20px' }}>G</div>
        <InputNumber min={0} max={255} onChange={(val) => setRValue(val)} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: `rgb(0,${gValue},0)`,
            width: '50px',
            height: '50px',
            margin: '20px',
          }}
        ></div>
        <div style={{ margin: '20px' }}>R</div>
        <InputNumber min={0} max={255} onChange={(val) => setGValue(val)} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: `rgb(0,0,${bValue})`,
            width: '50px',
            height: '50px',
            margin: '20px',
          }}
        ></div>
        <div style={{ margin: '20px' }}>B</div>
        <InputNumber min={0} max={255} onChange={(val) => setBValue(val)} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
            width: '50px',
            height: '50px',
            margin: '20px',
          }}
        ></div>
        <div style={{ margin: '20px' }}>
          rgb({rValue},{gValue},{bValue})
        </div>
      </div>
    </div>
  );
};

export default RGBPicker;
