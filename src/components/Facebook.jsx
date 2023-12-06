import profiles from './../data/berlin.json';

const Facebook = () => {


    return (
        <section>
            <h1>FACEBOOK</h1>
            {
                profiles.map(({firstName, lastName, country, img, isStudent}) => {
                    return (
                        <>
                            <img src={img} alt="" />
                            <p><b>Last Name:</b> {lastName}</p>
                            <p><b>First Name:</b> {firstName}</p>
                            <p><b>Country:</b> {country}</p>
                            <p><b>Type:</b> {isStudent === false ? "Teacher" : "Student"}</p>
                        </>
                    )
                })
            }
        </section>
    )

}

export default Facebook
