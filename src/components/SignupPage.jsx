import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap';

const SignupPage = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input 
            type='email'
            name='email'
          />

          <Label for="password">Password</Label>
          <Input 
            type='password'
            name='password'
          />

          
        </FormGroup>
      </Form>
    </div>
  );
};

export default SignupPage;
