import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('German');
  const [greeting, setGreeting] = useState('');
  const insertContent = (lang, adress) => {
    switch (lang) {
      case 'German':
        setGreeting('Hallo');
        break;
      case 'English':
        setGreeting('Hello');
        break;
      case 'French':
        setGreeting('Bonjour');
        break;
      default:
        setGreeting('');
        break;
    }
    setEmail(adress);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataPerson = { email, language };
    insertContent(dataPerson.language, dataPerson.email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control-lg">
          <label for="validationServer01" className="form-label">
            Email
          </label>
          <input
            className={`form-control ${
              email.includes('@') && email.includes('.com')
                ? 'is-valid'
                : 'is-invalid'
            }`}
            id="exampleFormControlInput1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
          />
          {email.includes('@') && email.includes('.com') ? (
            <div class="valid-feedback">You typed a valid email</div>
          ) : (
            <div class="invalid-feedback">You typed a invalid email</div>
          )}
        </div>
        <div className="form-group form-control-lg">
          <label>Password</label>
          <input
            className={`form-control ${
              password.length > 3 ? 'is-valid' : 'is-invalid'
            }`}
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
          />
          {password.length <= 3 && (
            <div class="invalid-feedback">Your password is too weak</div>
          )}
        </div>
        <div className="form-group form-control-lg">
          <label>Nationality</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option>German</option>
            <option>English</option>
            <option>French</option>
          </select>
        </div>
        <div className="form-control-lg">
          <button className="btn btn-primary btn-lg">Sign Up</button>

          <div className="my-3">
            <p>{greeting}</p>
            <p>Your email adress is: {email}</p>
            <p>
              Your email adress{' '}
              {email.includes('@') && email.includes('.com')
                ? 'correct'
                : 'incorrect'}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignupPage;
