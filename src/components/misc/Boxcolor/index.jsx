import './index.css';

function Boxcolor({ r, g, b }) {
  return (
    <div className="Boxcolor"> 
      <div>
        <p>rgb({r}, {g}, {b})</p>
      </div>
    </div>
  );
}

//no consigo poner las variables dentro de un 'style'

export default Boxcolor;