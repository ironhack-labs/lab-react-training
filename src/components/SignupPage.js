import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function SignupPage() {
    const [state, setstate] = useState({
        email: '',
        password: '',
        nationality: 'en'
    })

    const handleForm = (e) => {
        e.preventDefault()
        console.log(state)
    }   

    return (
        <div>
            <Form onSubmit={() => handleForm()}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={e => setstate({ ...state, email: e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={e => setstate({ ...state, password: e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label for="nationality">Nationality</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={e => setstate({ ...state, nationality: e.target.value})}>
                    <option value="en">en</option>
                    <option value="de">de</option>
                    <option value="fr">fr</option>
                    </Input>
                </FormGroup>
                <Button>Submit</Button>
            </Form>

            <p>{state.nationality === 'en' ? 'Hello': state.nationality === 'de' ? 'Hallo': state.nationality === 'fr' ? 'Bonjour' : ''}</p>
            <p>{state.email !== null? '' : 'Your email is ' + state.email}</p>

        </div>
    )
}

export default SignupPage
