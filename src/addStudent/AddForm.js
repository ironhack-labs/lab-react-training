import React from 'react'

export const AddForm = ({
    firstName,lastName, country,isStudent,
    handleChange,
    handleFormSubmit,
    // handleFirstNameInput, 
    // handleLastNameInput,
    // handleCountryInput,
    // handleIsStudentCheck
}) => {

    return (
        <div className='container'>
            <h2>Add student</h2>
            <hr/>
      <form onSubmit={handleFormSubmit}>
          <label>First name:</label>
          <input onChange={handleChange} type="text" name="firstName" value={firstName} />
          {/* <input onChange={handleFirstNameInput} type="text" name="firstName" value={firstName} /> */}

          <label>Last name:</label>
          <input onChange={handleChange} type="text" name="lastName" value={lastName} />
          {/* <input onChange={handleLastNameInput} type="text" name="lastName" value={lastName} /> */}

          <label>Country</label>
          <input onChange={handleChange} type="text" name="country" value={country} />
          {/* <input onChange={handleCountryInput} type="text" name="country" value={country} /> */}

          <label>Is student:</label>
          <input onChange={handleChange} type="checkbox" name="isStudent" checked={isStudent} />
          {/* <input onChange={handleIsStudentCheck} type="checkbox" name="isStudent" checked={isStudent} /> */}
          
          
          <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
    )
}

// export default AddForm
