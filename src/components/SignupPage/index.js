import { useEffect, useState } from 'react';
import './SignupPageStyle.css'

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('en');
    const [greeting, setGreeting] = useState('Hello')

    useEffect(() => {
        console.log(nationality);
        switch (nationality) {
          case 'de':
            setGreeting('Hallo');
            break;
          case 'en':
            setGreeting('Hello');
            break;
          case 'fr':
            setGreeting('Bonjour');
            break;
          default:
            setGreeting('Hello');
            break;
        }
        console.log(greeting);
    }, [nationality])

    return (
      <div className="SignupPage">
        <section>
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <p></p>
        </section>

        <section>
          <label>Password</label>
          <input type="password" />
          <p></p>
        </section>

        <section>
          <label>Nationality</label>
          <select onChange={(e) => setNationality(e.target.value)}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </section>

        <button>Signup</button>

        <p>{greeting}</p>
        <p>
          Your email is <b>{email}</b>
        </p>
      </div>
    );
}

export default SignupPage;