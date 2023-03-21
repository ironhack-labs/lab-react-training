import { Component } from 'react';
import { formSchema } from '../../utils/formSchema';
import FormControl from './FormControl/FormControl';
import Input from './Input/Input';
import Select from './Select/Select';
import Greetings from '../Greetings';

const INITIAL_VALUES = {
  email: '',
  password: '',
  nationality: '',
};

const nationalities = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'French',
    value: 'fr',
  },
];

class SignupPage extends Component {
  state = {
    values: { ...INITIAL_VALUES },
    errors: {},
    valuesPassedValidators: false,
  };

  onChange = (ev) => {
    const { name, value } = ev.target;

    this.setState((prevState) => {
      return {
        values: {
          ...prevState.values,
          [name]: value,
        },
      };
    });
  };

  isValidForm = () => {
    const { values } = this.state;
    const newErrors = {};

    Object.keys(values).forEach((valueKey) => {
      const error = formSchema[valueKey](values[valueKey]);

      if (error) {
        newErrors[valueKey] = error;
      }
    });

    const hasErrors = Object.keys(newErrors).length > 0;
    if (hasErrors) {
      this.setState({ errors: newErrors });
    }

    return !hasErrors;
  };

  onSubmit = (ev) => {
    ev.preventDefault();

    if (this.isValidForm()) {
      this.setState({
        errors: {},
        valuesPassedValidators: true,
      });
    }
  };

  render() {
    const { values, errors, valuesPassedValidators } = this.state;

    return (
      <div>
        <div>
          <form>
            <FormControl text="Email" htmlFor="email" error={errors.email}>
              <Input
                name="email"
                id="email"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={this.onChange}
              />
            </FormControl>

            <FormControl
              text="Password"
              htmlFor="password"
              error={errors.password}
            >
              <Input
                name="password"
                id="password"
                type="password"
                value={values.password}
                error={errors.password}
                onChange={this.onChange}
              />
            </FormControl>

            <FormControl
              text="Nationality"
              htmlFor="nationality"
              error={errors.nationality}
            >
              <Select
                error={errors.nationality}
                id="nationality"
                name="nationality"
                value={values.nationality}
                onChange={this.onChange}
                options={nationalities}
              />
            </FormControl>
            <button onClick={this.onSubmit} className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
        {valuesPassedValidators ? (
          <div>
            <hr />
            <p>
              <Greetings lang={values.nationality} />
            </p>
            <p>Your email address is: {values.email}</p>
            <p>Your email address is correct</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SignupPage;
