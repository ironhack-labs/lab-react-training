import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useState } from 'react'

const SignupPage = () => {

    const [data, setData] = useState({
        email:'',
        password:'',
        country:''
    })

    const onSubmit = (event) => {
        const { email, password, country } = data
        event.preventDefault()

        if (email && password && country){
            setData({
                ...data,
                error: false,
                submited: true
            })
        } else {
            setData({
                error: true,
                submited: false
            })
        }
    }

    const handleOnChange = (event) => {
        const { name, value } = event.target

        setData({
            ...data,
            [name]: value
        })
    }

    const chooseLang = (lang) => {
        let className= ''
        switch (lang) {
            case 'de':
                className = 'Hallo';
                break;
            case 'fr':
                className = 'Bonjour';
                break;
            case 'es':
                className = 'Hola';
                break;
            default:
                className = 'Hello';
                break;
        }
    return className; 
    }

    return(
        <div className='SignupPage col-7'>
            <Form inline onSubmit={onSubmit}>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            type="email" 
                            name='email' 
                            placeholder='Your email here' 
                            onChange={handleOnChange} 
                            />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input 
                            type="password"
                            name='password' 
                            placeholder='*************'
                            onChange={handleOnChange}
                            />
                    </div>
                    <div>
                        <Label htmlFor="country">Email</Label>
                        <Input type="select" name="country" onChange={handleOnChange}>
                            <option value="en">English</option>
                            <option value="de">German</option>
                            <option value="fr">Franceis</option>
                        </Input>
                    </div>
                    <Button type='submit' className='mt-4' color="primary">Sign up</Button>
                </FormGroup>
            </Form>

            <hr />
            <div>
                <p>{chooseLang(data.country)}</p>
                <p>{data.email && `Your mail address is: ${data.email}`}</p>
                <p></p>
            </div>
        </div>
    )
}

export default SignupPage