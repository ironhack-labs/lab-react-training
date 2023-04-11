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
                            <input style={{ color: emColor }} name="emailStr" defaultValue='' onChange={isEmpty} type="text" class={emBorder} placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <p style={{ color: emColor }}>{emMsg}</p>
                    </div>


                    <h3>Password:</h3>

                    <div>
                        <div class="input-group mb-3">
                            <input style={{ color: pwColor }} name="pwStr" defaultValue='' onChange={validatePassword} type="password" class={pwBorder} placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <p style={{ color: pwColor }}>{pwMsg}</p>
                    </div>

                    <h3>Nationality:</h3>

                    <div>
                        <select style={{ color: nationColor }} onChange={validateNationality} name="nationStr" type="text" class={nationBorder} aria-label="Username" aria-describedby="basic-addon1">
                            <option defaultValue='' >-- select one --</option>
                            <option value="afghan">Afghan</option>
                            <option value="albanian">Albanian</option>
                            <option value="algerian">Algerian</option>
                            <option value="american">American</option>
                            <option value="andorran">Andorran</option>
                            <option value="angolan">Angolan</option>
                            <option value="antiguans">Antiguans</option>
                            <option value="argentinean">Argentinean</option>
                            <option value="armenian">Armenian</option>
                            <option value="australian">Australian</option>
                            <option value="austrian">Austrian</option>
                            <option value="azerbaijani">Azerbaijani</option>
                            <option value="bahamian">Bahamian</option>
                            <option value="bahraini">Bahraini</option>
                            <option value="bangladeshi">Bangladeshi</option>
                            <option value="barbadian">Barbadian</option>
                            <option value="barbudans">Barbudans</option>
                            <option value="batswana">Batswana</option>
                            <option value="belarusian">Belarusian</option>
                            <option value="belgian">Belgian</option>
                            <option value="belizean">Belizean</option>
                            <option value="beninese">Beninese</option>
                            <option value="bhutanese">Bhutanese</option>
                            <option value="bolivian">Bolivian</option>
                            <option value="bosnian">Bosnian</option>
                            <option value="brazilian">Brazilian</option>
                            <option value="british">British</option>
                            <option value="bruneian">Bruneian</option>
                            <option value="bulgarian">Bulgarian</option>
                            <option value="burkinabe">Burkinabe</option>
                            <option value="burmese">Burmese</option>
                            <option value="burundian">Burundian</option>
                            <option value="cambodian">Cambodian</option>
                            <option value="cameroonian">Cameroonian</option>
                            <option value="canadian">Canadian</option>
                            <option value="cape verdean">Cape Verdean</option>
                            <option value="central african">Central African</option>
                            <option value="chadian">Chadian</option>
                            <option value="chilean">Chilean</option>
                            <option value="chinese">Chinese</option>
                            <option value="colombian">Colombian</option>
                            <option value="comoran">Comoran</option>
                            <option value="congolese">Congolese</option>
                            <option value="costa rican">Costa Rican</option>
                            <option value="croatian">Croatian</option>
                            <option value="cuban">Cuban</option>
                            <option value="cypriot">Cypriot</option>
                            <option value="czech">Czech</option>
                            <option value="danish">Danish</option>
                            <option value="djibouti">Djibouti</option>
                            <option value="dominican">Dominican</option>
                            <option value="dutch">Dutch</option>
                            <option value="east timorese">East Timorese</option>
                            <option value="ecuadorean">Ecuadorean</option>
                            <option value="egyptian">Egyptian</option>
                            <option value="emirian">Emirian</option>
                            <option value="equatorial guinean">Equatorial Guinean</option>
                            <option value="eritrean">Eritrean</option>
                            <option value="estonian">Estonian</option>
                            <option value="ethiopian">Ethiopian</option>
                            <option value="fijian">Fijian</option>
                            <option value="filipino">Filipino</option>
                            <option value="finnish">Finnish</option>
                            <option value="french">French</option>
                            <option value="gabonese">Gabonese</option>
                            <option value="gambian">Gambian</option>
                            <option value="georgian">Georgian</option>
                            <option value="german">German</option>
                            <option value="ghanaian">Ghanaian</option>
                            <option value="greek">Greek</option>
                            <option value="grenadian">Grenadian</option>
                            <option value="guatemalan">Guatemalan</option>
                            <option value="guinea-bissauan">Guinea-Bissauan</option>
                            <option value="guinean">Guinean</option>
                            <option value="guyanese">Guyanese</option>
                            <option value="haitian">Haitian</option>
                            <option value="herzegovinian">Herzegovinian</option>
                            <option value="honduran">Honduran</option>
                            <option value="hungarian">Hungarian</option>
                            <option value="icelander">Icelander</option>
                            <option value="indian">Indian</option>
                            <option value="indonesian">Indonesian</option>
                            <option value="iranian">Iranian</option>
                            <option value="iraqi">Iraqi</option>
                            <option value="irish">Irish</option>
                            <option value="israeli">Israeli</option>
                            <option value="italian">Italian</option>
                            <option value="ivorian">Ivorian</option>
                            <option value="jamaican">Jamaican</option>
                            <option value="japanese">Japanese</option>
                            <option value="jordanian">Jordanian</option>
                            <option value="kazakhstani">Kazakhstani</option>
                            <option value="kenyan">Kenyan</option>
                            <option value="kittian and nevisian">Kittian and Nevisian</option>
                            <option value="kuwaiti">Kuwaiti</option>
                            <option value="kyrgyz">Kyrgyz</option>
                            <option value="laotian">Laotian</option>
                            <option value="latvian">Latvian</option>
                            <option value="lebanese">Lebanese</option>
                            <option value="liberian">Liberian</option>
                            <option value="libyan">Libyan</option>
                            <option value="liechtensteiner">Liechtensteiner</option>
                            <option value="lithuanian">Lithuanian</option>
                            <option value="luxembourger">Luxembourger</option>
                            <option value="macedonian">Macedonian</option>
                            <option value="malagasy">Malagasy</option>
                            <option value="malawian">Malawian</option>
                            <option value="malaysian">Malaysian</option>
                            <option value="maldivan">Maldivan</option>
                            <option value="malian">Malian</option>
                            <option value="maltese">Maltese</option>
                            <option value="marshallese">Marshallese</option>
                            <option value="mauritanian">Mauritanian</option>
                            <option value="mauritian">Mauritian</option>
                            <option value="mexican">Mexican</option>
                            <option value="micronesian">Micronesian</option>
                            <option value="moldovan">Moldovan</option>
                            <option value="monacan">Monacan</option>
                            <option value="mongolian">Mongolian</option>
                            <option value="moroccan">Moroccan</option>
                            <option value="mosotho">Mosotho</option>
                            <option value="motswana">Motswana</option>
                            <option value="mozambican">Mozambican</option>
                            <option value="namibian">Namibian</option>
                            <option value="nauruan">Nauruan</option>
                            <option value="nepalese">Nepalese</option>
                            <option value="new zealander">New Zealander</option>
                            <option value="ni-vanuatu">Ni-Vanuatu</option>
                            <option value="nicaraguan">Nicaraguan</option>
                            <option value="nigerien">Nigerien</option>
                            <option value="north korean">North Korean</option>
                            <option value="northern irish">Northern Irish</option>
                            <option value="norwegian">Norwegian</option>
                            <option value="omani">Omani</option>
                            <option value="pakistani">Pakistani</option>
                            <option value="palauan">Palauan</option>
                            <option value="panamanian">Panamanian</option>
                            <option value="papua new guinean">Papua New Guinean</option>
                            <option value="paraguayan">Paraguayan</option>
                            <option value="peruvian">Peruvian</option>
                            <option value="polish">Polish</option>
                            <option value="portuguese">Portuguese</option>
                            <option value="qatari">Qatari</option>
                            <option value="romanian">Romanian</option>
                            <option value="russian">Russian</option>
                            <option value="rwandan">Rwandan</option>
                            <option value="saint lucian">Saint Lucian</option>
                            <option value="salvadoran">Salvadoran</option>
                            <option value="samoan">Samoan</option>
                            <option value="san marinese">San Marinese</option>
                            <option value="sao tomean">Sao Tomean</option>
                            <option value="saudi">Saudi</option>
                            <option value="scottish">Scottish</option>
                            <option value="senegalese">Senegalese</option>
                            <option value="serbian">Serbian</option>
                            <option value="seychellois">Seychellois</option>
                            <option value="sierra leonean">Sierra Leonean</option>
                            <option value="singaporean">Singaporean</option>
                            <option value="slovakian">Slovakian</option>
                            <option value="slovenian">Slovenian</option>
                            <option value="solomon islander">Solomon Islander</option>
                            <option value="somali">Somali</option>
                            <option value="south african">South African</option>
                            <option value="south korean">South Korean</option>
                            <option value="spanish">Spanish</option>
                            <option value="sri lankan">Sri Lankan</option>
                            <option value="sudanese">Sudanese</option>
                            <option value="surinamer">Surinamer</option>
                            <option value="swazi">Swazi</option>
                            <option value="swedish">Swedish</option>
                            <option value="swiss">Swiss</option>
                            <option value="syrian">Syrian</option>
                            <option value="taiwanese">Taiwanese</option>
                            <option value="tajik">Tajik</option>
                            <option value="tanzanian">Tanzanian</option>
                            <option value="thai">Thai</option>
                            <option value="togolese">Togolese</option>
                            <option value="tongan">Tongan</option>
                            <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                            <option value="tunisian">Tunisian</option>
                            <option value="turkish">Turkish</option>
                            <option value="tuvaluan">Tuvaluan</option>
                            <option value="ugandan">Ugandan</option>
                            <option value="ukrainian">Ukrainian</option>
                            <option value="uruguayan">Uruguayan</option>
                            <option value="uzbekistani">Uzbekistani</option>
                            <option value="venezuelan">Venezuelan</option>
                            <option value="vietnamese">Vietnamese</option>
                            <option value="welsh">Welsh</option>
                            <option value="yemenite">Yemenite</option>
                            <option value="zambian">Zambian</option>
                            <option value="zimbabwean">Zimbabwean</option>
                        </select>
                        <p style={{ color: nationColor }}>{nationMsg}</p>

                    </div>

                    <button type='submit' class="btn btn-primary">Submit</button>

                    {emailStr !== "" && pwStr !== "" && nationStr !== "" ?

                        <p>Hello, Your email address is: {emailStr} which is correct</p>

                        :

                        <></>

                    }


                </div>
            </form>
        </div>
    )
}
export default SignupPage