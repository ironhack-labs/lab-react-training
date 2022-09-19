import React, { useState } from 'react'

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [nationality, setNationality] = useState('fr');
    const [greeting, setGreeting] = useState('');

    const nationalityMessage = (language, emailAdress) => {
        switch (language){
            case 'fr':
                setGreeting('Bonjour')
                break;
            case 'en':
                setGreeting('Hello')
                break;
            case 'de':
                setGreeting('Hallo')
                break;
            default:
                setGreeting('')
                break;
        }
        setEmail(emailAdress)
    }


  return (
    <div style={{display:'flex', flexDirection: 'column', width: 500, margin: 20}}>
        <form>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password'/>
            <select name="country" id="country">
                <option value="" >Nationality</option>
                <option value="country">fr</option>
                <option value="country">en</option>
                <option value="country">de</option>
            </select>
            <p>Hello</p>
            <p>mensagem aqui</p>
            <p>seu email é tal</p>
        </form>
    </div>
  )
}

export default SignupPage