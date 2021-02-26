import React, {useState} from 'react'

export default function SignupPage() {

    const [datos, setDatos] = useState([{
        email:"",
        password:"",
        nationality:""
    }])
    
    const [newUser, setnewUser] = useState([])

    function handleChanges(event){
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
          }) 
    }

    function submitForm(event){
        event.preventDefault()

        console.log(datos)
    }

    return (
        <div>
            <form>
                <input onChange={(ev)=>handleChanges(ev)}  type="email" name="email" value={datos.email}/>
                <input onChange={(ev)=>handleChanges(ev)} type="password" name="password" value={datos.password}/>
                <select onChange={(ev)=>handleChanges(ev)} name="nationality">
                <option value="England">England</option>
                <option value="Deutschland">Deutschland</option>
                <option value="France">France</option>
                </select>
                <button onClick={(ev)=>submitForm(ev)}>Enviar</button>
            </form>
        </div>
    )
}
