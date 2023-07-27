import "./FaceBook.css"
import profiles from "../../data/berlin.json";



const FaceBook = () => {

    return (
        <section>
            <h1>Listado perfiles de facebook</h1>

            <div className="ContainerButtons">
                {/* <button onClick={handleBackground} >ENGLAND</button> */}
                <button>USA</button>
                <button>MALASIA</button>
                <button>GERMANY</button>
            </div>

            <hr />

            {
                profiles.map(({ firstName, lastName, country, img, isStudent }, idx) => {

                    const bgColor = country === "England" ? "violet" : 'white'

                    return (
                        <article key={idx} className="ProfileCard" style={{ backgroundColor: bgColor }}>
                            <img src={img} alt="" />
                            <h3>First Name: {firstName}</h3>
                            <h3>Last name: {lastName}</h3>
                            <h3>Country: {country}</h3>
                            <h3>Type: {isStudent ? "Student" : "no Student"}</h3>
                        </article>
                    )
                })
            }

        </section>

    )
}


export default FaceBook