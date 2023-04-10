import profiles from '../data/berlin.json'

const FaceBook = () => {

    const faces = [...profiles]

    return (

        <div>
            {faces.map((face) => {
                <div>
                    <img src={face.img} alt="" />

                </div>
            })}
        </div>
    )


}

export default FaceBook