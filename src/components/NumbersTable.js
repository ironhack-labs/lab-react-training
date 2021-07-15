import React from 'react'

// wenn nummer durch zwei teilbar, red färben
//if (numbers[i] % 2 == 0)

function NumbersTable (props) {

    const numbers = [];

    for (let i = 0; i < props.limit; i++) {
        numbers.push(i)
    }

    return (

        <div style={{backgroundColor: 'orange'}} > 
            
                {numbers.map(number => {
                    return <span style={{backgroundColor: 'red'}}>{number}</span>
                }
                )}
            
        </div>

    )
}

export default NumbersTable;


/* 
const movies = [
    { id: "AMLsriUkE", title: "Jurassic Park", director: "Steven Spielberg" },
    { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante" },
    { id: "z2uykusRE", title: "Titanic", director: "James Cameron" }
  ];


const MoviesList = () => {
    return (
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Card title={item.title} director={item.director} />
          </li>
        ))}
      </ul>
    );
  }; 
  */