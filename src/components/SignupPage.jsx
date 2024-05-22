import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import "./SignupPage.css"; // 新しく追加するCSSファイル

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(validatePassword(newPassword));
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const validateEmail = (email) => {
    // 簡易的なバリデーション：@を含むこと
    return email.includes("@");
  };

  const validatePassword = (password) => {
    // 簡易的なバリデーション：6文字以上
    return password.length >= 6;
  };

  const renderGreeting = () => {
    switch (nationality) {
      case "en":
        return <p>Hello</p>;
      case "de":
        return <p>Hallo</p>;
      case "fr":
        return <p>Bonjour</p>;
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <Form className="form">
        {" "}
        {/* form-containerクラスを追加 */}
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                style={{ borderColor: emailValid ? "green" : "red" }}
                className="custom-input" // 追加したCSSクラス
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                style={{ borderColor: passwordValid ? "green" : "red" }}
                className="custom-input" // 追加したCSSクラス
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <Input
            type="select"
            name="nationality"
            id="nationality"
            value={nationality}
            onChange={handleNationalityChange}
            className="custom-select" // 追加したCSSクラス
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </Input>
        </FormGroup>
        {renderGreeting()}
        <p className="custom-text">Your email is {email}</p>{" "}
        {/* custom-textクラスを追加 */}
      </Form>
    </div>
  );
};

export default SignupPage;
