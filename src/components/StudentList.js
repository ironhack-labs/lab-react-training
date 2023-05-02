import { useState } from "react"
import studentsDataJSON from "../students-data.json"
import IdCard from "./IdCard"

function StudentList() {
  const [students, setstudents] = useState(studentsDataJSON)
  const [showstudents, setShowstudents] = useState(true)


  const deletestudents = (studentId) => {
    const filteredstudents = students.filter(students => {
      return students._id !== studentId
    })

    setstudents(filteredstudents)
  }

  const toggleShowstudents = () => {
    setShowstudents(!showstudents)
  }

  return (
    <div>
      <h2>students List</h2>
      
      <button onClick={toggleShowstudents}>{showstudents ? 'Hide' : 'Show'}</button>

      { showstudents && students.map((students) => {
        return (
          <>
            {/* <div className="MovieCard">
              <h3>{movie.title}</h3>
              <p>Director: {movie.director}</p>
              <p>Rating: {movie.IMDBRating}</p>
              <button onClick={() => deleteMovie(movie._id)} className="btn-delete">Delete 🗑</button>
            </div> */}

            <IdCard key={students._id} students={students} />
          </>
        )
      }) }
    </div>
  )
}

export default studentsList