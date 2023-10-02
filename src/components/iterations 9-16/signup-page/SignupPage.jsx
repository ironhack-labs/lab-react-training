import React from 'react'

function SignupPage() {
  return (
    < div className="m-3">
        <form className='d-flex flex-column align-items-start gap-2' action="">
            <label htmlFor="email">Email</label>
            <input size="50" className='p-1' type="email" placeholder='Ironhaker33@patata.com' name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input size="25" className='p-1' type="text" placeholder='**********' name="password" id="password" />
            <label htmlFor="nationality">Nationality</label>
            <select className='p-1' style={{ width: 200 }} name="nationality" id="nationality">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="fr">French</option>
            </select>
            <input className='mt-3 btn btn-primary' type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default SignupPage;