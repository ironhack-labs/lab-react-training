import { useState } from 'react';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('en');
  
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
      };
  
    const validatePassword = (password) => {
      return password.length >= 8;
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleNationalityChange = (e) => {
      setNationality(e.target.value);
    };
  
    const getGreeting = (nationality) => {
      switch (nationality) {
        case "es":
          return "Hola";
        case 'en':
          return 'Hello';
        case 'de':
          return 'Hallo';
        case 'fr':
          return 'Bonjour';
        default:
          return 'Hello';
      }
    };
  
    return (
      <div className="container mx-auto mt-5 p-5">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                email ? (validateEmail(email) ? 'border-green-500' : 'border-red-500') : ''
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                password ? (validatePassword(password) ? 'border-green-500' : 'border-red-500') : ''
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nationality">
              Nationality
            </label>
            <select
              id="nationality"
              value={nationality}
              onChange={handleNationalityChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
              <option value="es">Castellano</option>
            </select>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign Up
          </button>
        </form>
        <div className="mt-4">
          <p>{getGreeting(nationality)}</p>
          <p>Your email is {email}</p>
        </div>
      </div>
    );
  }
  

export default SignupPage;