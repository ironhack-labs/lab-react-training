import { useState } from 'react';
import profiles from '../data/berlin.json';
import './Facebook.css';

function Facebook() {
  const [country, setCountry] = useState();
  const [search, setSearch] = useState('');
  const [active, setActive] = useState();
  const [students, setStudents] = useState(profiles);

  let countriesAll = profiles.map((student) => student.country);
  countriesAll = Array.from(new Set(countriesAll));

  return (
    <>
      <div>
        <div>
          <label className="form-label">Search</label>
          <input
            className="w-50 mb-3 form-control"
            type="text"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </div>
        <button
          className="btn btn-info m-1"
          onClick={() => setStudents([...students.reverse()])}
        >
          Sort
        </button>
        <button
          className="btn btn-info m-1"
          onClick={() => setCountry(undefined)}
        >
          All
        </button>
        {countriesAll.map((country, i) => (
          <button
            key={i}
            onClick={() => setCountry(country)}
            className="btn btn-info m-1"
          >
            {country}
          </button>
        ))}
      </div>
      <div className="d-flex flex-wrap gap-1">
        {students
          .filter(
            (student) => country === undefined || student.country === country
          )
          .filter((student) =>
            student.firstName.toLowerCase().includes(search.toLowerCase())
          )
          .map((student, i) => {
            return (
              <div
                key={i}
                className="d-flex mb-3 gap-1 border border-dark fs-3 boxFace"
              >
                <img
                  className="m-2"
                  src={student.img}
                  alt="student"
                  style={{ width: '200px' }}
                  onClick={() =>
                    setActive(student === active ? undefined : student)
                  }
                />
                {student === active && (
                  <div className="m-2">
                    <div>
                      <b>First Name: </b>
                      {student.firstName}
                    </div>
                    <div>
                      <b>Last Name: </b>
                      {student.lastName}
                    </div>
                    <div>
                      <b>Country: </b>
                      {student.country}
                    </div>
                    <div>
                      <b>Type: </b>
                      {student.isStudent ? 'Student' : 'Teacher'}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Facebook;
