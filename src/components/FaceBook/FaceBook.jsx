import { useState } from "react";
import usersFace from "./../../data/berlin.json";
import Card from "../Card/Card";
const FaceBook = () => {
  const [users, setUsers] = useState(usersFace);
  const handleFilter = (event) => {
    setUsers(event.target.value)
  }
  const countries = usersFace.map(user => user.country).filter((country, index, arr) => arr.indexOf(country) === index)
  const studentsToRender = users
    ? usersFace.filter(student => student.country === users)
    : usersFace
  return (
    <div>
    <button className="btn btn-danger" onClick={handleFilter} >All</button>
      {countries.map((country) => {
        return (
          <button className="btn btn-primary me-3 mb-3" onClick={handleFilter} value={country} key={country}>{country}</button>
        )
      })}
      {studentsToRender.map((user) => {
        return (
          <>
          <Card key={user.img} {...user}/>
          </>
        );
      })}
    </div>
  );
};

export default FaceBook;
