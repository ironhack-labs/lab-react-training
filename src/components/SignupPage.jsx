function SignupPage() {
  return (
    <form>
      <label htmlFor="signupFirstname">First Name</label>
      <input
        type="text"
        name="firstname"
        id="signupFirstname"
        autoComplete="name"
      />

      <label htmlFor="signupEmail">Email</label>
      <input type="email" name="email" id="signupEmail" autoComplete="email" />
      <small>invalid email</small>

      <label htmlFor="signupPassword">Password</label>
      <input type="password" name="password" id="signupPassword" />
      <small>weak password</small>

      <label htmlFor="signupLang">Language</label>
      <select name="language" id="signupLang">
        <option>en</option>
        <option>de</option>
        <option>fr</option>
        <option>es</option>
        <option>other</option>
      </select>
      <button>Sign up</button>
    </form>
  );
}

export default SignupPage;
