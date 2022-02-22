function IdCard(props) {

    const { lastName, firstName, gender, height, birth, picture } = props



    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={picture} alt="women's picture" />
                </div>
                <div className="col-8">
                    <p> lastName = {lastName}</p>
                    <p> firstName = {firstName}</p>
                    <p> gender = {gender}</p>
                    <p> height = {height}</p>
                    <p> birth = {birth.toUTCString()}</p>
                </div>


            </div>
        </div>

    )
}

export default IdCard

