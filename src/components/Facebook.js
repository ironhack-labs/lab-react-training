import { useState } from 'react';
import profiles from '../data/berlin.json';
import './Facebook.css';
const Facebook = () => {
  const [people, setPeople] = useState(profiles);
  const sortName= ()=>{
  const profileSort = people.sort((a,b)=>{
      return b.firstName.localeCompare(a.firstName)
    })
    setPeople(profileSort)
  }
  const search = (value) => {
    if (value === '') {
      setPeople(profiles);
    } else {
      const newFilter = people.filter((person) => {
        return (
          person.firstName.toLowerCase().includes(value.toLowerCase()) && person
        );
      });
      setPeople(newFilter)
    }
  };
  const filterArr = (value) => {
    let persons;
    switch (value) {
      case 'All':
        persons = people.map((profile) => {
          profile.value = true;
          return profile;
        });
        break;
      case 'England':
        persons = people.map((profile) => {
          if (profile.country === 'England') {
            profile.value = true;
          } else {
            profile.value = false;
          }
          return profile;
        });
        break;
      case 'USA':
        persons = people.map((profile) => {
          if (profile.country === 'USA') {
            profile.value = true;
          } else {
            profile.value = false;
          }
          return profile;
        });
        break;
      case 'Malaysia':
        persons = people.map((profile) => {
          if (profile.country === 'Malaysia') {
            profile.value = true;
          } else {
            profile.value = false;
          }
          return profile;
        });
        break;
      case 'Germany':
        persons = people.map((profile) => {
          if (profile.country === 'Germany') {
            profile.value = true;
          } else {
            profile.value = false;
          }
          return profile;
        });
        break;
      default:
        persons = people.map((profile) => {
          if (
            profile.country !== 'England' &&
            profile.country !== 'USA' &&
            profile.country !== 'Malaysia' &&
            profile.country !== 'Germany'
          ) {
            profile.value = true;
          } else {
            profile.value = false;
          }
          return profile;
        });
    }
    setPeople(persons);
  };
  return (
    <div>
      <div class="input-group rounded my-2 ">
        <input
          onChange={(e) => {
            search(e.target.value);
          }}
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>

      <div id="profiles">
        <button onClick={sortName} type="button" class="btn btn-info">
          Sort By Name
        </button>
        <button
          onClick={(e) => {
            filterArr(e.target.value);
          }}
          className="country"
          value="All"
        >
          All
        </button>
        <button
          onClick={(e) => {
            filterArr(e.target.value);
          }}
          className="country"
          value="England"
        >
          England
        </button>
        <button
          onClick={(e) => {
            filterArr(e.target.value);
          }}
          className="country"
          value="USA"
        >
          USA
        </button>
        <button
          onClick={(e) => {
            filterArr(e.target.value);
          }}
          className="country"
          value="Malaysia"
        >
          Malaysia
        </button>
        <button
          onClick={(e) => {
            filterArr(e.target.value);
          }}
          className="country"
          value="Germany"
        >
          Germany
        </button>
        <button
          onClick={(e) => {
            filterArr(e.target.value);
          }}
          className="country"
        >
          ...
        </button>

        {people.map((profile) => {
          console.log(people)
          return (
            <div
              className="container"
               style={{ backgroundColor: profile.value ? '#A3D2E2':'' }}
            >
              <div className="mx-2">
                <img className="Profile" src={profile.img} alt={profile.img} />
              </div>
              <div>
                <p>
                  <b>First Name:</b> {profile.firstName}
                </p>
                <p>
                  <b>Last Name:</b> {profile.lastName}
                </p>
                <p>
                  <b>Country:</b> {profile.country}
                </p>
                <p>
                  <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Facebook;
