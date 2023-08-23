import profiles from '../../data/profiles.JSON'



const FaceBook = () => {

    const newArray = [...profiles]




    return (

        newArray.map(elem => {

            <p>{elem.firstName}</p>


        })

    )


}



export default FaceBook