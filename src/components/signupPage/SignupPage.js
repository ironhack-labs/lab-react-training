import React from 'react';
import { Form, FormGroup, Label, FormText, Col, Button, Input, FormFeedback} from 'reactstrap';
import data from '../../data/berlin.json';
import "./SignupPage.css";


const SignupPage = (props) => {

    // eliminate duplicates -> make a copy with the countries
    const countries = data.map(item => item.country);
    // eliminate duplicates
    let uniqueContries = [...new Set(countries)]

    // state to control email
    const [value, setValue] = React.useState("");

    // state to control password
    const [ passwordValue, setPasswordValue] = React.useState("");

    //onchange method 
    const handleOnChange = ({target}) => {
      setValue(target.value)
    }

    const handlePassword = ({target}) => {
      setPasswordValue(target.value);
    }

    const checkEmail = "maxence@ironhack.com" === value;

    const checkPassword = "1234Test" === passwordValue;
    return (
        <Form inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label
          className="me-sm-2"
          for="exampleEmail"
          >
          Email
          </Label>
          
          <Input 
          id="exampleEmail"
          name="email"
          placeholder="something@idk.cool"
          type="email"
          value={value}
          onChange={handleOnChange}
          className={checkEmail ? "valid" : "invalid"}
          />
          {checkEmail 
            ?
            <div>
              <p className="valid-text">You typed a valid email</p>
            </div>
            :
            <div>
              <p className="invalid-text">You typed a valid email</p>
            </div>
          }
        </FormGroup>


        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label
            className="me-sm-2"
            for="examplePassword"
            >
            Password
            </Label>
            <Input 
            id="examplePassword"
            name="password"
            placeholder="don't tell!"
            type="password"
            value={passwordValue}
            onChange={handlePassword}
            className={checkPassword ? "valid" : "invalid"}
            />
            {checkPassword 
              ?
              <div>
                <p className="valid-text">You typed a valid email</p>
              </div>
              :
              <div>
                <p className="invalid-text">Wrong password!</p>
              </div>
          }
            

        </FormGroup>
    
    
        <FormGroup row>
            <Label
                for="exampleSelect"
                sm={2}
            >
                Nationality
            </Label>
            <Col sm={10}>
                <Input
                id="exampleSelect"
                name="select"
                type="select"
                > 
                <option value="">Select Country</option>
                {
                  uniqueContries.map((item) => {
                    return (
                      <option key={item}>
                        {item}
                      </option>
                    )
                  })
                }
                </Input>
            </Col>
          </FormGroup>
        <Button>
            Submit
        </Button>
        </Form>
    )
}

export default SignupPage;

