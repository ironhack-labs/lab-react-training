/*

No he podido hacerla
*/



import { Component } from "react";  
import SignupControl from "./SignupControl";
import Input from "./Input";
import { REQUIRED_EMAIL, REQUIRED_PASSWORD} from '../../../utils/error';
import { isRequiredValidator, passwordValidator} from '../../../utils/validators';
import Select from "./Select";


const lang = [
  {
    label: 'English',
    value: 'en'
  },

  {
    label: 'German',
    value: 'de'
  },

  {
    label: 'French',
    value: 'fr'
  }
]




const signupSchema = {
  email: (value) => {
    if (isRequiredValidator(value)) {
      return REQUIRED_EMAIL
    }
    if(passwordValidator(value)) {
      return REQUIRED_PASSWORD
    }
  }
}

const INITIAL_VALUES = {
  email: ' ', 
  password: ' ',
  nationality: ' ',

}

export default class SignupPage extends Component {
  state = {
    values: {...INITIAL_VALUES}, 
    errors: {}
  }

  onChange = (event) => {
    const { name, value} = event.target;


    this.setState(prevState => {
      return {
        values: {
          ...prevState.values, 
          [name] : value
        }
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    if (this.isValidForm()) {
      this.props.onSubmitPlace(this.state.values) 
      this.setState({ values: {...INITIAL_VALUES}, errors: {} }) 
    }
  }
  
 



    isValidForm = () => {
      const { values } = this.state;
      const newErrors = {};

      Object.keys(values).forEach(valueKey => {
        const error = signupSchema[valueKey]
        (values[valueKey])

        if(error) {
          newErrors[valueKey] = error
        }
      })

      const hasErrors = Object.keys(newErrors).length > 0
      if (hasErrors) {
        this.setState({errors: newErrors})
      }
      return !hasErrors
    }

    render() {
      const { values, errors } = this.state;

      return (
        <div className="AddPlaceForm">
          <h3>Signup</h3>
          <form onSubmit={this.onSubmit}>
            <SignupControl text="email" htmlFor="email" error={errors.email}>
              <Input
                name="email"
                id="email"
                value={values.email}
                onChange={this.onChange}
                placeholder="@@@"
                error={errors.email}
              />
            </SignupControl>
              
            <SignupControl text="password" htmlFor="password" error={errors.password}>
              <Input
                name="password"
                id="password"
                value={values.password}
                onChange={this.onChange}
                placeholder="*****"
                error={errors.password}
              />
            </SignupControl>
            <Select
                error={errors.lang}
                id="country"
                name="country"
                value={values.lang}
                onChange={this.onChange}
                options={lang}
            />
            
            <br />
                <button type="submit" className="btn btn-primary">
                    Signup
                </button>
            <p>{lang.value}, Su correo electrónico es {values.email}</p>
          </form>
        </div>
       
  
      )
    }

  }