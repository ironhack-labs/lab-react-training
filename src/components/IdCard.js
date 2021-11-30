function IdCard({lastName, firstName, gender, height, birth, picture}) {

    return (
        <>
            <div className="idCard-wrapper">
                <img src={picture}/>
                <div className="idCard-content">
                    <label>
                        Firstname: <span>{firstName}</span>
                    </label>

                    <label>
                        Lastname: <span>{lastName}</span>
                    </label>

                    <label>
                        Gender: <span>{gender}</span>
                    </label>

                    <label>
                        Height: <span>{height}</span>
                    </label>

                    <label>
                        Birthday: <span>{birth.toISOString().split('T')[0]}</span>
                    </label>

                </div>
            </div>
        </>
    );
}

export default IdCard;