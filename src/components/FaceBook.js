import React, {useState} from 'react'
import profiles from '../data/berlin.json';

export default function FaceBook() {
    const [perfiles, setPerfiles] = useState(profiles);

    const [pais, setpais] = useState('');
    let clase = 'rgba(30, 143, 255, 0.774)';
  
    const color = (pais) => {
      console.log(pais);
  
      switch (pais) {
        case 'USA':
          setpais('USA');
          break;
        case 'todos':
          setpais('todos');
          break;
  
        case 'ING':
          setpais('England');
          break;
  
        case 'MAL':
          setpais('Malaysia');
          break;
          case 'ALE':
              setpais('Germany');
              break;
              
          case 'OTROS':
          setpais('OTROS');
          break;
      }
    };
  
    return (
      <>
        <div className="mt-5 botones">
          <button onClick={() => color('todos')}>TODOS</button>
          <button onClick={() => color('USA')}>USA</button>
          <button onClick={() => color('ING')}>INGLATERRA</button>
          <button onClick={() => color('MAL')}>MALASIA</button>
          <button onClick={() => color('ALE')}>ALEMANIA</button>
          <button onClick={() => color('OTROS')}>...</button>
        </div>
  
        {perfiles.map((e) => (
          <div
            className={'card mb-3 container mt-5'}
            style={
              e.country === pais
                ? { backgroundColor: clase }
                : null || pais === 'todos'
                ? { backgroundColor: clase }
                : null ||
                  (pais === 'OTROS' &&
                    e.country !== 'USA' &&
                    e.country !== 'England' &&
                    e.country !== 'Malaysia' &&
                    e.country !== 'Germany')
                ? { backgroundColor: clase }
                : null
            }
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={e.img} alt="..." style={{ maxWidth: '50%' }} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">First Name: {e.firstName}</h5>
                  <p className="card-text">last Name :{e.lastName}</p>
                  <p className="card-text">Country :{e.country}</p>
                  {e.isStudent ? (
                    <p className="card-text">type :Student</p>
                  ) : (
                    <p className="card-text">type :Teacher</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
}
