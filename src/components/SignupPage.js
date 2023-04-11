import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function SignupPage() {

    let [emailStr, setEmailStr] = useState('')
    const [emBorder, setEmBorder] = useState('form-control border border-3 border-danger')
    const [emMsg, setEmMsg] = useState('Please enter a valid email.')
    const [emColor, setEmColor] = useState('red')

    const [pwStr, setPwStr] = useState('')
    const [pwBorder, setPwBorder] = useState('form-control border border-3 border-danger')
    const [pwMsg, setPwMsg] = useState('Please enter a valid password.')
    const [pwColor, setPwColor] = useState('red')

    const [nationStr, setNationStr] = useState('')
    const [nationBorder, setNationBorder] = useState('form-control border border-3 border-danger')
    const [nationMsg, setNationMsg] = useState('Please select nationality.')
    const [nationColor, setNationColor] = useState('red')

    const [langStr, setLangStr] = useState('')

    const isEmpty = (e) => {
        let apos = e.target.value.indexOf('@')
        let dotpos = e.target.value.indexOf('.')

        if (e.target.value == "" || apos < 1 || dotpos - apos < 2 || e.target.value.length <= e.target.value.indexOf('.') + 1) {
            setEmailStr("")
            setEmBorder('form-control border border-3 border-danger')
            setEmMsg('Please enter a valid email.')
            setEmColor('red')

        }
        else {

            setEmailStr(e.target.value)
            setEmBorder("form-control border border-success border-3")
            setEmColor('green')
            setEmMsg('You type a valid email')

        }
    }


    const validatePassword = (e) => {

        const regex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

        if (e.target.value === "" || e.target.value.length < 9 || !regex.test(e.target.value)) {
            setPwStr('')
            setPwBorder('form-control border border-3 border-danger')
            setPwMsg('Please enter a valid password.')
            setPwColor('red')
        }
        else {
            setPwStr(e.target.value)
            setPwBorder('form-control border border-3 border-success')
            setPwMsg('Valid Password Entered.')
            setPwColor('green')
        }

    }

    const validateNationality = (e) => {
        if (e.target.value !== "") {
            setNationStr(e.target.value)
            setNationBorder('form-control border border-3 border-success')
            setNationMsg('Nationality selected.')
            setNationColor('green')

            if(e.target.value==='en'){
                setLangStr('Hello')
            }
            else if(e.target.value==='fr'){
                setLangStr('Bonjour')
            }
            else if(e.target.value === 'de'){
                setLangStr('Hallo')
            }

        }
        else {
            setNationStr('')
            setNationBorder('form-control border border-3 border-danger')
            setNationMsg('Please select nationality.')
            setNationColor('red')

        }
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        let submittedDetails = { emailStr, pwStr, nationStr }

        console.log(submittedDetails);


        setEmailStr('')
        setEmBorder('form-control border border-3 border-danger')
        setEmMsg('Please enter a valid email.')
        setEmColor('red')

        setPwStr('')
        setPwBorder('form-control border border-3 border-danger')
        setPwMsg('Please enter a valid password.')
        setPwColor('red')

        setNationStr('')
        setNationBorder('form-control border border-3 border-danger')
        setNationMsg('Please select nationality.')
        setNationColor('red')

        setLangStr('')

        e.target.reset()
        console.log(submittedDetails);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container'>

                    <h3>Email:</h3>

                    <div>
                        <div class="input-group mb-3">
                            <input style={{ color: emColor }} name="emailStr"  onChange={isEmpty} type="text" class={emBorder} placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <p style={{ color: emColor }}>{emMsg}</p>
                    </div>


                    <h3>Password:</h3>

                    <div>
                        <div class="input-group mb-3">
                            <input style={{ color: pwColor }} name="pwStr"  onChange={validatePassword} type="password" class={pwBorder} placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <p style={{ color: pwColor }}>{pwMsg}</p>
                    </div>

                    <h3>Nationality:</h3>

                    <div>
                        <select style={{ color: nationColor }} onChange={validateNationality} name="nationStr" type="text" class={nationBorder} aria-label="Username" aria-describedby="basic-addon1">
                            <option  >-- select one --</option>
                            <option value="en">English</option>
                           
                            <option value="fr">French</option>
                           
                            <option value="de">German</option>

                        </select>
                        <p style={{ color: nationColor }}>{nationMsg}</p>

                    </div>

                    <button type='submit' class="btn btn-primary">Submit</button>

                    {emailStr !== "" && pwStr !== "" && nationStr !== "" ?

                        <p>{langStr}, Your email address is: {emailStr} which is correct</p>

                        :

                        <></>

                    }


                </div>
            </form>
        </div>
    )
}
export default SignupPage