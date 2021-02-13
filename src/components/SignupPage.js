import { Form, Input, Button, Select, Row, Col, Typography } from 'antd';
import React, {useState} from 'react'


const Demo = () => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState();
  const [country, setCountry] = useState();
  const [password, setPassword] = useState();

  const handleCountry = (e) => {
    setCountry(e)
  }

  const submitForm = (value) => {
 
  };

  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          {/* Al componente Form hay que pasarle como prop form la instancia del formulario que nos retorna useForm */}
          <Form layout="vertical" form={form} onFinish={submitForm}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please input a valid email!',
                },
              ]}
            >
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.password)}
              />
            </Form.Item>
            <Form.Item
              name="country"
              lable="country"
              style={{ width: '100%' }}
              value={country}
            >
              {/* <Input> */}
              <Select value={country} onChange={handleCountry}>
                <Select.Option value="en">USA</Select.Option>
                <Select.Option value="de">Germany</Select.Option>
                <Select.Option value="fr">France</Select.Option>
              </Select>
              {/* </Input> */}
            </Form.Item>
            <Button
              style={{ backgroundColor: 'rebeccapurple' }}
              type="primary"
              block
              htmlType="submit"
            >
              Send
            </Button>
          </Form>
        </Col>
      </Row>
      <div>
        {country === 'en' ? (
          <p>Hello</p>
        ) : country === 'de' ? (
          <p>Hallo</p>
        ) : country === 'fr' ? (
          <p>Bonjeur</p>
        ) : null}
      </div>
      <div>
        {email ? 
          <div>
          <p> Your email is: {email} </p>
          <p> Your email is correct </p>
          </div>
         : null}
      </div>
    </div>
  );
};

export default Demo;
