import 'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greetings';
function display() {
  return (
    <>
      <Greet lang="de">Ludwig</Greet>
      <Greet lang="fr">François</Greet>
    </>
  );
}
export default display;
