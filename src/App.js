import './App.css';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <div className="IdCard box">
        <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="" />
        <div class="right">
          <strong>First name</strong>
          ": " "John"
          <br></br>
          <strong>Last name</strong>
          ": " "Doe"
          <br></br>
          <strong>Gender</strong>
          ": " "male"
          <br></br>
          <strong>Height</strong>
          ": " "1.78" "m "<br></br>
          <strong>Birth</strong>
          ": " "Mon Jul 13 1992"
          <br></br>
        </div>
      </div>
      <div class="IdCard box">
        <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="" />
        <div class ="right">
          <strong>First name</strong>
          ": " Obrien
          <br></br>
          <strong>Last name</strong>
          ": " Delores
          <br></br>
          <strong>Gender</strong>
          ": "female "<br></br>
          <strong>Height</strong>
          ": " "1.72" "m<br></br>
          <strong>Birth</strong>
          ": " Mon May 10 1993
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default App;
