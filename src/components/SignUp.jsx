import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isStrongPassword = (password) => password.length >= 8;

  const getGreeting = () => {
    switch (nationality) {
      case "de":
        return "Hallo";
      case "fr":
        return "Bonjour";
      default:
        return "Hello";
    }
  };

  return (
    <div style={styles.container}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            ...styles.input,
            borderColor: email
              ? isValidEmail(email)
                ? "green"
                : "red"
              : "#ccc",
          }}
        />
      </div>

      <div style={styles.inputContainer}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            ...styles.input,
            borderColor: password
              ? isStrongPassword(password)
                ? "green"
                : "red"
              : "#ccc",
          }}
        />
      </div>

      <div style={styles.inputContainer}>
        <label>Nationality:</label>
        <select
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          style={styles.input}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div style={styles.outputContainer}>
        <p>{getGreeting()}!</p>
        {email && <p>Your email is {email}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  outputContainer: {
    marginTop: "20px",
  },
};

export default SignupPage;
