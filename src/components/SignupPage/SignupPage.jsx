import { Button, Checkbox, Form, Input, Select } from 'antd';
import { useState } from 'react';
const { Option } = Select


function SignupPage(){

    const [nationality,setNationality] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordStrength,setPasswordStrength] = useState("horrible")



    const updateStateCountry = (e) =>{
        const country = e
        setNationality(e)
    }
    const updateEmail = (e)=>{
        const email = e.target.value
        setEmail(email)
    }
    const updatePassword = (e)=>{
        const password = e.target.value
        
        if (0<password.length &&password.length <=4){
            setPasswordStrength('weak')
        }
        else if (4<password.length && password.length<=7 ){
            setPasswordStrength('medium')
        }
        else if (7<password.length && password.length<=10 ){
            setPasswordStrength('strong')
        }
        else if (10<password.length ){
            setPasswordStrength('perfect')
        }
        setPassword(password)
    }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        onChange={(e)=>updateEmail(e)}
        rules={[{ required: true,type:'email', message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
      <p>Your Email is: {email}</p>

      <Form.Item
        label="Password"
        onChange={(e)=>updatePassword(e)}
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      {passwordStrength === "horrible" && <p>Password Strength: ✩✩✩✩✩</p>}

      {passwordStrength === "weak" && <p>Password Strength: ★✩✩✩✩</p>}
      {passwordStrength === "medium" && <p>Password Strength: ★★✩✩✩</p>}
      {passwordStrength === "strong" && <p>Password Strength: ★★★✩✩</p>}
      {passwordStrength === "perfect" && <p>Password Strength: ★★★★★</p>}

      <Form.Item label="Nationality">
          <Form.Item
            name={['address', 'country']}
            noStyle
            rules={[
              {
                required: true,
                message: 'country is required',
              },
            ]}
          >
            <Select  onChange={(e)=> updateStateCountry(e)} placeholder="Select country">
              <Option value="en">en</Option>
              <Option value="de">de</Option>
              <Option value="fr">fr</Option>
            </Select>   
          </Form.Item>
      </Form.Item>
            {nationality === 'fr' && <p>Bonjour </p>}
            {nationality === 'de' && <p>Hallo </p>}
            {nationality === 'en' && <p>Good morning</p>}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupPage;