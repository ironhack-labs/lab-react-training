import Cards from "./components/id_Card";
import "bootstrap/dist/css/bootstrap.css";
import boy from "./assets/boy1.jpg";
import girl from "./assets/girl1.jpg";
function display() {
  let last_name = ["Ahmed", "Ali"];
  let first_name = ["Laiba", "Umer"];
  let gender = ["Female", "Male"];
  let height = [1.7, 1.9];
  let birth = [new Date("1990-03-23"), new Date("1990-01-14")];
  let picture = [girl, boy];

  return (
    <>
      <div>
        {last_name.map((name, index) => (
          <Cards
            key={index}
            last_name={name}
            first_name={first_name[index]}
            gender={gender[index]}
            height={height[index]}
            birth={birth[index]}
            picture={picture[index]}
          />
        ))}
      </div>
    </>
  );
}
export default display;
