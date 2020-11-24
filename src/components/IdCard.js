//Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y devuelven a React elementos que describen lo que debe aparecer en la pantalla.
import imageStyles from './imageStyles'

const Card = () => {
  const image = 'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg'
  // const styles = {
  //   width: '200px',
  //   borderRadius: '15px'
  // }
  return (
  <div className="card">
    <img src={image} className="card-img-top" alt="imagen" style={imageStyles}/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Card
