import React from 'react'
import { useState } from 'react/cjs/react.development'


export default function SignupPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword]= useState("")
    const [nationality, setNationality] = useState("")

  return (
    <>
        <h1>Signup</h1>
        <form>
            <label>Email</label>
            <input/>

            <label>Password</label>
            <input/>

            <label>Nationality</label>
            <input/>

        </form>
    </>
  )
}
