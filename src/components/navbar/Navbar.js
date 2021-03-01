import logo from '../../images/ironlogo.png'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container my-2">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="React" width="40" height="40" className="d-inline-block align-center me-3" />
          React Training
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
